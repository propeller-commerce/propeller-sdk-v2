import { GraphQLClient } from '../../src/client/GraphQLClient';
import { machineService } from '../../src/service/MachineService';
import { document as machineDoc } from '../../src/generated/operations/machine';
import type { SparePartsMachine } from '../../src/type/SparePartsMachine';

const okResponse = (data: any) =>
  new Response(JSON.stringify({ data }), { status: 200 });

const newClient = () =>
  new GraphQLClient({
    endpoint: 'https://x.test/gql',
    securityMode: 'direct',
    apiKey: 'k',
  });

describe('machineService', () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch' as any);
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it('getMachine returns the response payload typed as SparePartsMachine', async () => {
    fetchSpy.mockResolvedValueOnce(
      okResponse({ machine: { id: 7, name: [{ language: 'EN', value: 'Mixer' }] } })
    );

    const svc = machineService(newClient());
    const machine: SparePartsMachine = await svc.getMachine({ slug: 'mixer' });

    expect(machine.id).toBe(7);

    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.operationName).toBe('machine');
    expect(body.variables.slug).toBe('mixer');
  });

  // The whole point of the fragment change: the machine's spare-parts list must
  // be filterable/sortable/pageable. Before this, `sparePartProducts` took no
  // argument, so a machine page could not filter its parts at all.
  it('forwards sparePartsMachineProductSearchInput onto the wire', async () => {
    fetchSpy.mockResolvedValueOnce(okResponse({ machine: { id: 7 } }));

    const input = {
      language: 'NL',
      page: 2,
      offset: 24,
      statuses: ['A'],
      term: 'bolt',
    };

    const svc = machineService(newClient());
    await svc.getMachine({
      slug: 'mixer',
      sparePartsMachineProductSearchInput: input as any,
    });

    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.variables.sparePartsMachineProductSearchInput).toEqual(input);
    // The document must actually declare + apply the variable, or the backend
    // silently ignores it and returns an unfiltered list.
    expect(machineDoc).toContain(
      '$sparePartsMachineProductSearchInput: SparePartsMachineProductSearchInput'
    );
    expect(machineDoc).toContain(
      'sparePartProducts(input: $sparePartsMachineProductSearchInput)'
    );
  });

  // Nested child machines are rendered as cards (id/name/slug/media only). If the
  // child block also selected sparePartProducts, every node would drag its whole
  // parts list along on every fetch.
  it('does not fetch sparePartProducts for nested child machines', async () => {
    const occurrences = machineDoc.match(/sparePartProducts/g) ?? [];
    expect(occurrences).toHaveLength(1);
  });

  it('passes fetchOptions through to the transport (cache hints)', async () => {
    fetchSpy.mockResolvedValueOnce(okResponse({ machine: { id: 7 } }));

    const svc = machineService(newClient());
    await svc.getMachine({ slug: 'mixer' }, { next: { revalidate: 300, tags: ['machine:mixer'] } });

    // fetchOptions is a transport hint — it must reach fetch() init and must
    // NOT be serialised into the GraphQL request body.
    const init = fetchSpy.mock.calls[0][1] as any;
    expect(init.next).toEqual({ revalidate: 300, tags: ['machine:mixer'] });

    const body = JSON.parse(init.body as string);
    expect(body.variables.next).toBeUndefined();
    expect(body.fetchOptions).toBeUndefined();
  });
});

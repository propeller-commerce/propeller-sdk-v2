import { TrackAndTrace } from '../type/TrackAndTrace';
import { TrackAndTraceResponse } from '../type/TrackAndTraceResponse';
import { TrackAndTraceSearchInput } from '../type/TrackAndTraceSearchInput';
import { TrackAndTraceCreateInput } from '../type/TrackAndTraceCreateInput';
import { TrackAndTraceUpdateInput } from '../type/TrackAndTraceUpdateInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as trackAndTraceDoc } from '../generated/operations/trackAndTrace';
import { document as trackAndTracesDoc } from '../generated/operations/trackAndTraces';
import { document as trackAndTraceCreateDoc } from '../generated/operations/trackAndTraceCreate';
import { document as trackAndTraceUpdateDoc } from '../generated/operations/trackAndTraceUpdate';
import type { TrackAndTraceUpdateVariables } from '../generated/operationVariables';
/**
 Service for managing track and trace operations
 */
export function trackAndTraceService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific track and trace record
       * @param id Track and trace ID
       * @returns Promise<TrackAndTrace> Track and trace data
       */
    async getTrackAndTrace(id: number): Promise<TrackAndTrace> {
      const result = await runOperation<{ trackAndTrace: TrackAndTrace }>(client, trackAndTraceDoc, 'trackAndTrace', { id });
      return result.data.trackAndTrace as TrackAndTrace;
    },
    /**
       Retrieves track and trace records with search
       * @param input Search input parameters
       * @returns Promise<TrackAndTraceResponse> Track and trace response
       */
    async getTrackAndTraces(input?: TrackAndTraceSearchInput): Promise<TrackAndTraceResponse> {
      const result = await runOperation<{ trackAndTraces: TrackAndTraceResponse }>(client, trackAndTracesDoc, 'trackAndTraces', { input });
      return result.data.trackAndTraces as TrackAndTraceResponse;
    },
    /**
       Creates a new track and trace record
       * @param input Track and trace creation input
       * @returns Promise<TrackAndTrace> The created track and trace record
       */
    async createTrackAndTrace(input: TrackAndTraceCreateInput): Promise<TrackAndTrace> {
      const result = await runOperation<{ trackAndTraceCreate: TrackAndTrace }>(client, trackAndTraceCreateDoc, 'trackAndTraceCreate', { input });
      return result.data.trackAndTraceCreate as TrackAndTrace;
    },
    /**
       Updates an existing track and trace record
       * @param input Track and trace update input
       * @returns Promise<TrackAndTrace> The updated track and trace record
       */
    async updateTrackAndTrace(variables: TrackAndTraceUpdateVariables): Promise<TrackAndTrace> {
      const result = await runOperation<{ trackAndTraceUpdate: TrackAndTrace }>(client, trackAndTraceUpdateDoc, 'trackAndTraceUpdate', variables);
      return result.data.trackAndTraceUpdate as TrackAndTrace;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `trackAndTraceService(client)`.
 */
export class TrackAndTraceService {
  private readonly _svc: ReturnType<typeof trackAndTraceService>;
  constructor(client: GraphQLClient) { this._svc = trackAndTraceService(client); }
  /**
   * Retrieves a specific track and trace record
   * @param id Track and trace ID
   */
  getTrackAndTrace(id: number): Promise<TrackAndTrace> { return this._svc.getTrackAndTrace(id); }
  /**
   * Retrieves track and trace records with search
   * @param input Search input parameters
   */
  getTrackAndTraces(input?: TrackAndTraceSearchInput): Promise<TrackAndTraceResponse> { return this._svc.getTrackAndTraces(input); }
  /**
   * Creates a new track and trace record
   * @param input Track and trace creation input
   */
  createTrackAndTrace(input: TrackAndTraceCreateInput): Promise<TrackAndTrace> { return this._svc.createTrackAndTrace(input); }
  /**
   * Updates an existing track and trace record
   * @param input Track and trace update input
   */
  updateTrackAndTrace(variables: TrackAndTraceUpdateVariables): Promise<TrackAndTrace> { return this._svc.updateTrackAndTrace(variables); }
}

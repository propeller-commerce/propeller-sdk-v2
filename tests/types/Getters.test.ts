import { getLocalized } from '../../src/util/getLocalized';
import type { LocalizedString } from '../../src/type/LocalizedString';

describe('getLocalized()', () => {
  const names: LocalizedString[] = [
    { language: 'EN', value: 'Widget' },
    { language: 'NL', value: 'Widgetje' },
    { language: 'DE', value: 'Widgetlein' },
  ];

  it('returns the value for the requested language', () => {
    expect(getLocalized(names, 'EN')).toBe('Widget');
    expect(getLocalized(names, 'NL')).toBe('Widgetje');
    expect(getLocalized(names, 'DE')).toBe('Widgetlein');
  });

  it('falls back to the explicit fallback language when requested is missing', () => {
    expect(getLocalized(names, 'FR', 'NL')).toBe('Widgetje');
  });

  it('falls back to the first entry when neither requested nor fallback present', () => {
    expect(getLocalized(names, 'FR', 'IT')).toBe('Widget');
  });

  it('returns undefined for missing/empty input', () => {
    expect(getLocalized(undefined, 'NL')).toBeUndefined();
    expect(getLocalized([], 'NL')).toBeUndefined();
  });

  it('returns undefined when matched entry has no value', () => {
    const nameless: LocalizedString[] = [{ language: 'NL', value: undefined }];
    expect(getLocalized(nameless, 'NL', 'EN')).toBeUndefined();
  });
});

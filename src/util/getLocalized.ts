import type { LocalizedString } from '../type/LocalizedString';

/**
 * Pick the value for `lang` out of a `LocalizedString[]`, falling back to
 * `fallback` (if provided) and finally to the first entry's value.
 *
 * Replaces the per-class `getName('NL')` / `getDescription('NL')` etc. methods
 * generated through v0.9.x. Use this with a single import and any localized
 * field on any response:
 *
 *   import { getLocalized } from 'propeller-sdk-v2';
 *
 *   const name = getLocalized(product.names, 'EN', 'NL');
 *   const desc = getLocalized(product.descriptions, locale);
 *
 * Returns `undefined` only when the input array is empty/missing.
 */
export function getLocalized(
  values: LocalizedString[] | undefined,
  lang: string,
  fallback?: string
): string | undefined {
  if (!values || values.length === 0) return undefined;
  const direct = values.find((v) => v.language === lang)?.value;
  if (direct !== undefined) return direct;
  if (fallback) {
    const fb = values.find((v) => v.language === fallback)?.value;
    if (fb !== undefined) return fb;
  }
  return values[0]?.value;
}

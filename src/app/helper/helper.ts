import { Locations } from '@app/constants/locations 1';

/**
 * Strips the query string and fragment from a route path.
 *
 * Used for analytics: ad clicks arrive with `fbclid`/`utm_*` params appended,
 * which are unique per click. Without stripping them every visit would look
 * like a different page in the reports.
 */
export const normalizeAnalyticsPath = (path: string): string =>
  path.split('?')[0].split('#')[0] || '/';

export const getLocName = (id: string | number | undefined) => {
  const find: any = Locations.find((item: any) => item.id == id);
  if (find && find != undefined) {
    return find?.name;
  }

  return '';
};

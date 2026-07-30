// Default (development) environment.
// Replaced by environment.prod.ts in production builds via angular.json fileReplacements.
export const environment = {
  production: false,
  // Leave empty in dev so Google Analytics does not load/track locally.
  gaMeasurementId: '',
  // Leave empty in dev so the Meta Pixel does not load/track locally.
  metaPixelId: '',
};

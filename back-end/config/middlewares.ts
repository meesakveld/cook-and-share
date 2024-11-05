export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'"],
          'img-src': [
            "'self'",
            'data:',
            'strapi.io',
            'cook-and-share.onrender.com',
            'blob:',

          ],
          'media-src': ["'self'", 'data:', 'strapi.io', 'cook-and-share.onrender.com', 'blob:'],
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

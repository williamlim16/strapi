module.exports = [
  'strapi::logger',
  'strapi::errors',
{
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', env('CDN_URL')], // <--- Allow images from CDN],
          'img-src': ["'self'", 'data:', 'blob:', 'portfolio-mdx.s3.ap-southeast-1.amazonaws.com', env('CDN_URL')],
          'media-src': ["'self'", 'data:', 'blob:', 'portfolio-mdx.s3.ap-southeast-1.amazonaws.com', env('CDN_URL')],
          upgradeInsecureRequests: null,
        },
      },
    },
  },  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

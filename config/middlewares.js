module.exports = ({env})=> [
  'strapi::logger',
  'strapi::errors',
{
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'], // <--- Allow images from CDN],
          'img-src': ["'self'", 'data:', 'blob:', 'portfolio-mdx.s3.ap-southeast-1.amazonaws.com', 'asset.limstudio.work'],
          'media-src': ["'self'", 'data:', 'blob:', 'portfolio-mdx.s3.ap-southeast-1.amazonaws.com', 'asset.limstudio.work'],
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

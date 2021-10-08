module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a7356ab55bcf86c7c193bc0cc4bd82b2'),
    },
  },
  url: env("URL", "http://localhost:1337"),
});

const PROXY_CONFIG = [
  {
      context: [
          "/api/resource/*",
      ],
      target: "http://localhost:3000",
      secure: false,
      logLevel : "debug"
  },
  {
    context: [
        "/api/*",
    ],
    target: "http://your.remote.backend",
    secure: false,
    logLevel : "debug"
}
]

module.exports = PROXY_CONFIG;

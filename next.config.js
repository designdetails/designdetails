module.exports = {
  env: {
    SIMPLECAST_V2_API_KEY: process.env.SIMPLECAST_V2_API_KEY,
  },
  // The site doesn't use next/image; this disables the /_next/image optimizer
  // endpoint entirely so it can't be reached as an attack surface.
  images: {
    unoptimized: true,
  },
}

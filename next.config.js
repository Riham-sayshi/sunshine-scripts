const withNextIntl = require("next-intl/plugin")();

/** @type {import("next").NextConfig} */
const nextConfig = {
  // Your existing configuration
};

module.exports = withNextIntl(nextConfig);


const withMDX = require('@next/mdx')();

module.exports = withMDX({
  webpack: (config, options) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: 'json',
          use: 'yaml-loader',
        },
      ]
    );
    return config;
  },
  target: 'serverless',
});

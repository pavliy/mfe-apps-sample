const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "main-host",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
        shared: {
            "@angular/core": { singleton: true, eager: true, strictVersion: true, requiredVersion: '~12.2.3' },
            "@angular/common": { singleton: true, eager: true, strictVersion: true, requiredVersion: '~12.2.3' },
            "@angular/router": { singleton: true, eager: true, strictVersion: true, requiredVersion: '~12.2.3' }
        }
    }),
  ],
};

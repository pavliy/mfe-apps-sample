const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:9102/",
        uniqueName: "purchaseApp"
      },
      optimization: {
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({
            name: "purchaseApp",
            library: { type: "var", name: "purchaseApp" },
            filename: "remoteEntry.js",
            exposes: {
                './PurchaseIsolatedComponents': './src/bootstrap.ts',
            },
            shared: {
              "@angular/core": { singleton: false, strictVersion: true, requiredVersion: '>=12.1.5' },
              "@angular/common": { singleton: false, strictVersion: true, requiredVersion: '>=12.1.5' },
              "@angular/router": { singleton: false, strictVersion: true, requiredVersion: '>=12.1.5' },
              "@angular/common/http": { singleton: false, strictVersion: true, requiredVersion: '>=12.1.5' }
            }
          })
      ],
    };

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:9101/",
        uniqueName: "marketApp"
      },
      optimization: {
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({
            name: "marketApp",
            library: { type: "var", name: "marketApp" },
            filename: "remoteEntry.js",
            exposes: {
                // './web-components': './src/bootstrap.ts',
                './MarketIncomes': './src/app/market-finance/market-incomes/market-incomes.component.ts'
            },
            shared: {
              "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '~12.2.3' },
              "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '~12.2.3' },
              "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '~12.2.3' }
            }
          })
      ],
    };

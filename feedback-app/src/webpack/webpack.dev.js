const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const { ModuleFederationPlugin } =
  require("webpack").container;

const deps = require("../../package.json").dependencies;

module.exports = merge(common, {

  mode: "development",

  devtool: "source-map",

  output: {
    publicPath: "http://localhost:3001/"
  },

  devServer: {
    port: 3001,

    historyApiFallback: true,

    hot: true,

    open: true,

    static: "./dist",

    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },

  plugins: [
    new ModuleFederationPlugin({

      name: "feedback",

      filename: "remoteEntry.js",

      exposes: {
        "./FeedbackApp": "./src/FeedbackApp"
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react
        },

        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"]
        }
      }

    })

  ]

});
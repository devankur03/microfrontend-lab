const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const { ModuleFederationPlugin } =
  require("webpack").container;

const deps = require("../../package.json").dependencies;

module.exports = merge(common, {

  mode: "production",

  output: {
    publicPath: process.env.FEEDBACK_APP_URL + "/"
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
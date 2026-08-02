const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const { ModuleFederationPlugin } =
  require("webpack").container;

const deps = require("../../package.json").dependencies;

module.exports = merge(common, {

  mode: "production",

  output: {
    publicPath: process.env.SURVEY_APP_URL + "/"
  },

  plugins: [

    new ModuleFederationPlugin({

      name: "survey",

      filename: "remoteEntry.js",

      exposes: {
        "./SurveyApp": "./src/SurveyApp"
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
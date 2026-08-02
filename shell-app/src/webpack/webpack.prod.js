const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const { ModuleFederationPlugin } =
  require("webpack").container;

const deps = require("../../package.json").dependencies;

module.exports = merge(common, {

  mode: "production",

  plugins: [

    new ModuleFederationPlugin({

      name: "shell",

      remotes: {
        feedback: `feedback@${process.env.FEEDBACK_APP_URL}/remoteEntry.js`,
        survey: `survey@${process.env.SURVEY_APP_URL}/remoteEntry.js`
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
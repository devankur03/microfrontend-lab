const  {
     merge 
} = require("webpack-merge");
 const common = require("./webpack.common");
 const  {
     ModuleFederationPlugin 
} = require("webpack").container;
 const deps = require("../../package.json").dependencies;
 module.exports = merge(common,
  {
     mode: "development",
     devtool: "source-map",
     devServer:  {
         port: 3003,
         historyApiFallback: true,
         hot: true,
         open: true,
         static: "./dist" 
    },
     plugins: [ new ModuleFederationPlugin( {
         name: "shell",
         remotes:  {
             feedback: "feedback@http://localhost:3001/remoteEntry.js",
             survey: "survey@http://localhost:3002/remoteEntry.js" 
        },
         shared:  {
             react:  {
                 singleton: true,
                 requiredVersion: deps.react 
            },
             "react-dom":  {
                 singleton: true,
                 requiredVersion: deps["react-dom"] 
            } 
        } 
    }) ] 
});
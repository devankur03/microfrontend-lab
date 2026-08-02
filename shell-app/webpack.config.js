module.exports = (env, argv) => {

  if (argv.mode === "production") {
    return require("./src/webpack/webpack.prod");
  }

  return require("./src/webpack/webpack.dev");
};
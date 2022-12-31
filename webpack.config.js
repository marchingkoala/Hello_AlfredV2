const MomentTimezoneDataPlugin = require("moment-timezone-data-webpack-plugin");
const currentYear = new Date().getFullYear();

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  devServer: {
    static: {
      directory: __dirname + "/public",
    },
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    // To include only specific zones, use the matchZones option
    new MomentTimezoneDataPlugin({
      matchZones: /^America/,
    }),

    // To keep all zones but limit data to specific years, use the year range options
    new MomentTimezoneDataPlugin({
      startYear: currentYear - 5,
      endYear: currentYear + 5,
    }),
  ],
};

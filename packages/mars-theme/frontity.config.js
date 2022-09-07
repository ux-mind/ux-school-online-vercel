export const webpack = ({ config, mode, target }) => {
  // Add support for a new file type.
  config.module.rules.push({
    test: /\.(mov|mp4)$/,
    // type: "asset/resource",
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "video",
        },
      },
    ],
  });
};

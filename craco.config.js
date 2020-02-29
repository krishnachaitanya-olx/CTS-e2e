const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");
const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");
const { ESLINT_MODES } = require("@craco/craco");

// Don't open the browser during development
process.env.BROWSER = "none";

module.exports = {
    webpack: {
        plugins: [
            new WebpackBar({ profile: true }),
            ...(process.env.NODE_ENV === "development"
                ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
                : []),
        ],
    },
    plugins: [
        { plugin: require("craco-preact") },
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeThemeLessPath: path.join(
                    __dirname,
                    "antd.customize.less" //https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
                )
            }
        }
    ],
    eslint: {
        mode: ESLINT_MODES.file
    },
};
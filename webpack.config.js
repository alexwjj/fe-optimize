const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const smp = new SpeedMeasurePlugin();


const isProduction = process.env.NODE_ENV === 'production';

const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const paths = require('./paths');

module.exports = smp.wrap({
    mode: 'production',
    // devtool: 'hidden-source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    context: __dirname,
    entry: {
        app: './src/index.jsx',
        // test: './src/test.js' // 测试函数lazy parsing, eager parsing
    },
    output: {
        path: `${__dirname}/build`,
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[chunkhash:8].bundle.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    minSize: 0,
                    minChunks: 1,
                    priority: 10,
                    chunks: 'initial'
                },
                common: {
                    name: 'common',
                    test: /[\\/]src[\\/]/,
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        noParse: /lodash/,
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: /src/,
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-react'],
                },
            },
            {
                test: /(\.css$)/,
                use: [
                    isProduction ? {
                        loader: MiniCssExtractPlugin.loader
                    } :
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[hash]-[name].[ext]',
                    },
                }, ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.PUBLIC_URL': JSON.stringify('')
        }),
        new HtmlWebpackPlugin({
            template: 'template.html',
        }),
        new CopyPlugin({
            patterns: [{
                from: './img/*',
            }, ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash:8].css',
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true
                    }
                }],
            },
            canPrint: true
        }),
        /* 动态链接库引用 */
        // new DllReferencePlugin({
        //     manifest: require(`${__dirname}/dll/react.manifest.json`)
        // }),

        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            exclude: [/\.map$/, /asset-manifest\.json$/],
            importWorkboxFrom: 'cdn',
            navigateFallback: paths.publicUrlOrPath + 'index.html',
            navigateFallbackBlacklist: [
                // Exclude URLs starting with /_, as they're likely an API call
                new RegExp('^/_'),
                // Exclude any URLs whose last part seems to be a file extension
                // as they're likely a resource and not a SPA route.
                // URLs containing a "?" character won't be blacklisted as they're likely
                // a route with query params (e.g. auth callbacks).
                new RegExp('/[^/?]+\\.[^/]+$'),
            ],
        }),

        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: paths.publicUrlOrPath,
            generate: (seed, files, entrypoints) => {
                const manifestFiles = files.reduce((manifest, file) => {
                    manifest[file.name] = file.path;
                    return manifest;
                }, seed);
                const entrypointFiles = entrypoints.app.filter(
                    fileName => !fileName.endsWith('.map')
                );

                return {
                    files: manifestFiles,
                    entrypoints: entrypointFiles,
                };
            },
        }),

        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'server',
        //     analyzerHost: '127.0.0.1',
        //     analyzerPort: 8889,
        //     reportFilename: 'report.html',
        //     defaultSizes: 'parsed',
        //     openAnalyzer: true,
        //     generateStatsFile: false,
        //     statsFilename: 'stats.json',
        //     statsOptions: null,
        //     logLevel: 'info'
        // }),
    ],
});
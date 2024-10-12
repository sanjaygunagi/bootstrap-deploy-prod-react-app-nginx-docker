const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    // entry: {
    //     main: './src/index.tsx', // Main entry file
    //     button: './src/components/Button/Button.tsx', // /Users/sanjaygunagi/workspace/new-app/src/components/Button/Button.tsx
    //     component: './src/components/Component/index.tsx'
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'], // Add .scss extension
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // This handles CSS files
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS into separate file
                //    'style-loader',
                    'css-loader' // Translates CSS into CommonJS
                ],
                // use: ['style-loader', 'css-loader'], // Injects CSS into the DOM and resolves imports
            },
            {
                test: /\.scss$/, // This handles SCSS files
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS into separate file
                //    'style-loader', 
                   'css-loader', 
                   'sass-loader' // Translates CSS into CommonJS
                ],
                // use: ['style-loader', 'css-loader', 'sass-loader'], // Injects CSS, resolves imports, and compiles Sass to CSS
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // This handles image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // Keep the original path and name
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: true, // Enable minimization
        minimizer: [
            `...`, // Default minimizer for JS
            new CssMinimizerPlugin(), // Add CSS minification
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Path to your template
            filename: 'index.html', // Output filename
        }),
        new MiniCssExtractPlugin({
          filename: 'styles.css', // Output CSS file name
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true,
        port: 3000,
    },
    // devtool: 'source-map', 
    mode: 'production',
};

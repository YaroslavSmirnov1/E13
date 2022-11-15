const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/new.ts',
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        open: true,
        port: 3001,
        stats: {            
            children: false,
            maxModules: 0
           }
      },
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin()        
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            { test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: true,
                }
            }, 'css-loader']}
        ]
      }
}
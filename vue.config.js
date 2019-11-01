const webpack = require('webpack');
module.exports = {
    devServer: {
        open: true
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',

                jQuery: 'jquery',

                'windows.jQuery': 'jquery'
            })
        ]
    }
};
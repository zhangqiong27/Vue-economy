"use strict";
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry:[path.resolve(__dirname,"src/main")],
    output:{
        filename:"main.bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    resolve:{
        alias:{
            vue:"vue/dist/vue.js"
        }
    },
    module:{
        rules:[
            {test:/\.css$/,loader:"style-loader!css-loader",exclude:/node_modules/},
            {test:/\.vue$/,loader:"vue-loader",exclude:/node_modules/},
            {test:/\.(eot|svg|ttf|woff)$/,loader:"url-loader"},
            {test:/\.(gif|jpg|png|jpeg)$/,loader:"url-loader"},
            {test:/\.js$/,loader:"babel-loader",query:{presets:["es2015","stage-2"]},exclude:/node_modules/}
        ]
    }
};


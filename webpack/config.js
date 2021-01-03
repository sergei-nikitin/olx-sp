// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { merge } = require('webpack-merge');
const loadSharedConfig = require('./configs/shared');

const loadModeConfig = env => require(`./configs/${env.mode}`)(env);

module.exports = env => merge(loadSharedConfig(env), loadModeConfig(env));

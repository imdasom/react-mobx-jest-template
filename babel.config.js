console.log('babel.config.js settings...');
module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        [ "@babel/plugin-proposal-decorators", { "legacy": true } ],
        [ "@babel/plugin-proposal-class-properties", { "loose": true } ],
    ]
};
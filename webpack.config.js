const path=require('path');

module.exports = {
    entry:'./assets/script.js',
    output: {
        filename:'main.js',
        path:path.resolve(__dirname, 'dist'),
    },
}
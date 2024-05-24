const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'preBuild') {
   module.exports = require('./path-to/webpack.config.preBuild.js');
}
if (TARGET === 'final') {
   module.exports = require('./path-to/webpack.config.final.js');
}

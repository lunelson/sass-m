var path = require('path');
var sassTrue = require('sass-true');
var sassFile = path.join(__dirname, 'test/index.scss');
sassTrue.runSass({file: sassFile}, describe, it);
var hookshot = require('hookshot');
var raven = require('raven');

var client = new raven.Client('https://0c2b0522792e419896a33f821b5aa144:93ea68f01a6848c0be3ac522c07cf4ac@app.getsentry.com/64613');
client.patchGlobal();

hookshot()
.on('refs/heads/master', 'git pull')
.listen(3000);

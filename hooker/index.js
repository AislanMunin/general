var hookshot = require('hookshot');
var raven = require('raven');

var client = new raven.Client('https://cc941daec854450d921325fa0bcaf93b@app.getsentry.com/65802');
client.patchGlobal();

hookshot('refs/heads/master', 'git pull')
.listen(3000);

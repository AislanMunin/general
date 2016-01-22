var hookshot = require('hookshot');

hookshot()
.on('refs/heads/master', 'git pull')
.listen(3000);

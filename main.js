var yas = require('youtube-audio-server')
var port = 18731;

yas.listen(port, () => {
  console.log('listening on http://localhost:' + port);
})

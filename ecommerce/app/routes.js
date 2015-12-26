var Todo = require('./models/todo');

module.exports = function(app) {
  app.get('/api/todos', function(req, res) {
  });
  app.post('/api/todos', function(req, res) {
  });
  app.delete('/api/todos/:todo_id', function(req, res) {
  });
  app.get('*', function(req, res) {
    res.sendFile('public/index.html', { 'root': __dirname });
  });
};

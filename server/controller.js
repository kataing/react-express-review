var todos = ['swim', 'eat'];

const controller = {
  get:(req, res) => {
    res.status(200).send(todos);
  },

  post: (req, res) => {
    var todo = req.body.todo;
    todos.push(todo);
    res.status(201).send(todos);
  },

  update: (req, res) => {

  },

  delete: (req, res) => {
    // todos.splice(req.body.index, 1);
    todos.splice(req.query.index, 1);
    res.status(200).send(todos);
  }
}

module.exports = controller;
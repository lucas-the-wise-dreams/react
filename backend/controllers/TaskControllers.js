const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.send(tasks);
  } catch (error) {
    res.send(error)
  }
};

module.exports.saveTasks = (req, res) => {
  const { objeto } = req.body;

  TaskModel.create(objeto)
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { objeto } = req.body;

  console.log(id);
  console.log(objeto);

  TaskModel.findByIdAndUpdate(id, objeto)
    .then(() => res.send("Update successfully"))
    .catch((err) => {
      console.log(err.message);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Delete successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

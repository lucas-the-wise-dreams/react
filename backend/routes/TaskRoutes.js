const { Router } = require("express");

const {getTasks, saveTasks, deleteTask, updateTask} = require("../controllers/TaskControllers")

const router = Router();

router.get("/get", getTasks);
router.post("/save", saveTasks);
router.put("update", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;

const router = require("express").Router();
let Task = require("../models/TodoModel");

router.route("/add").post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const dueDate = req.body.dueDate;
    const status = req.body.status;

    const newTask = new Task({
        title,
        description,
        dueDate,
        status
    });

    newTask.save()
        .then(() => res.json("Task Added"))
        .catch((err) => console.log(err));
});

router.route("/").get(async (req, res) => {
    await Task.find()
        .then((tasks) => res.json(tasks))
        .catch((err) => console.log(err));
});

router.route("/get/:id").get(async (req, res) => {
    let taskId = req.params.id;
    try {
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).send({ status: "Task not found" });
        }
        return res.status(200).send({ status: "Task fetched", task: task });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ status: "Error fetching task", error: err.message });
    }
});

router.route("/update/:id").put(async (req, res) => {
    let taskId = req.params.id;
    const { title, description, dueDate, status } = req.body;

    const updateTask = {
        title,
        description,
        dueDate,
        status
    };

    try {
        const task = await Task.findByIdAndUpdate(taskId, updateTask, { new: true });
        if (!task) {
            return res.status(404).send({ status: "Task not found" });
        }
        return res.status(200).send({ status: "Task updated", task: task });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ status: "Error updating task", error: err.message });
    }
});

router.route("/status/:id").put(async (req, res) => {
    let taskId = req.params.id;
    const { status } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(taskId, { status }, { new: true });
        if (!task) {
            return res.status(404).send({ status: "Task not found" });
        }
        return res.status(200).send({ status: "Task updated", task: task });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ status: "Error updating task", error: err.message });
    }
});

router.route("/delete/:id").delete(async (req, res) => {
    let taskId = req.params.id;
    await Task.findByIdAndDelete(taskId)
        .then(() => res.status(200).send({ status: "Task Deleted" }))
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with Task Deleted" });
        });
});

module.exports = router;

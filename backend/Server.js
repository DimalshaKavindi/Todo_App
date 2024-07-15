const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.error('Could not connect to MongoDB...', err));

const taskRouter = require("./routes/TodoRouter.js");
app.use("/api/tasks", taskRouter);

const authRouter = require("./routes/AuthRouter.js");
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on: ${PORT}`);
});

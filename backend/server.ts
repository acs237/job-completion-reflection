const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jobReflection');

// Define the JobReflection model
const JobReflectionSchema = new mongoose.Schema({
    taskDescription: String,
    duration: String,
    reflection: String,
});
const JobCompleted = mongoose.model('JobReflection', JobReflectionSchema);

// Handle POST request from frontend
app.post("/api/job-reflection-submit", async (req, res) => {
    try {
        const jobcompleted = new JobCompleted(req.body);
        console.log("Received job reflection data:", req.body);
        await jobcompleted.save();
        res.status(201).send({ message: "Job reflection saved successfully!" });
    } catch (error) {
        res.status(500).send({ message: "Error saving job reflection", error: error.message });
    }
});

// Start the server
app.listen(3002, () => {
    console.log("Server is running on http://localhost:3002");
})
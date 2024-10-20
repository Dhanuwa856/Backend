import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const connectionString =
  "mongodb+srv://User_009:VvTcjy6OrHSmtPVp@cluster0.pku5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Connection Failed:", error.message);
  });

app.get("/", (req, res) => {
  res.send("API is working!");
});

// Start server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

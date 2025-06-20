const express = require("express");
const connectDB = require("./config/mongoose.config");
const User = require("./models/userModel");
const router = require("./routes/routes");
const app = express();
const cors = require("cors");

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(process.env.FRONTEND_URL));
app.use("/api/users", router);






app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});
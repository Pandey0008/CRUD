const express = require("express");
const connectDB = require("./config/mongoose.config");
const User = require("./models/userModel");
const router = require("./routes/routes");
const app = express();
const cors = require("cors");

connectDB();

console.log('Allowed frontend URL from env:', process.env.FRONTEND_URL);

app.use(cors({
    origin: function (origin, callback) {
        console.log(`CORS middleware received origin: ${origin}`);
        const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:5173"];
        if (!origin || allowedOrigins.includes(origin)) {
            console.log(`Origin ${origin} is allowed.`);
            callback(null, true);
        } else {
            console.error(`Origin ${origin} not allowed by CORS policy.`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/users", router);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});
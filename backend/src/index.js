import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
dotenv.config()

const app = express();
const port = process.env.PORT;
const frontendURL = process.env.FRONTEND_URL
const __dirname = path.resolve();

const data = {"message" : "Hello World"};

app.use(cors({origin: [frontendURL],}))

app.get("/api", (req, res) => {
    res.json(data);
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(port, () => {
    console.log("NODE Environment: ", process.env.NODE_ENV);
    console.log(`Server is listening on port ${port}`);
});

// npm run dev 
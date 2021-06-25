import express from "express";
import data from "../data";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3050;

app.use(express.json());
app.use(cors());

app.get("/api/v1/uncrowded", (req, res) => {
    res.json(data.trails);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
import express from "express";
import cors from "cors";
import data from "../data";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const API_V1_ROOT = "/api/v1";


app.get(`${API_V1_ROOT}/trails/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    const selection = data.find(trail => trail.OGF_ID === id);
    if (selection) {
        return res.json(selection).status(200);
    }
    return res.json({error: `Trail with ID ${id} not found!`}).status(404);
});


app.get(`${API_V1_ROOT}/trails`, (_, res) => {
    return res.json(data).status(200);
});


// Does not persist across multiple runs
app.post(`${API_V1_ROOT}/trails`, (req, res) => {
    const trail = req.body;
    trail.OGF_ID = parseInt(trail.OGF_ID);
    data.push(trail);
    return res.json(trail).status(201);
});


app.listen(PORT, () => {
    console.log(`REST API server running on port: ${PORT}`);
});
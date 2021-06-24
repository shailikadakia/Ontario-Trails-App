import express from "express";
import data from "../data";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const API_V1_ROOT = "/api/v1";


app.get(`${API_V1_ROOT}/trails/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    const selection = data.features.find(trail => trail.properties.OGF_ID === id);
    if (selection) {
        return res.json(selection).status(200);
    }
    return res.json({error: `Trail with ID ${id} not found!`}).status(404);
});


app.get(`${API_V1_ROOT}/trails`, (_, res) => {
    return res.json(data.features).status(200);
});


// Does not persist across multiple runs
app.post(`${API_V1_ROOT}/trails`, (req, res) => {
    const trail = {
        type: "Feature",
        properties: req.body,
    };
    trail.properties.OGF_ID = parseInt(trail.properties.OGF_ID);
    data.features.push(trail);
    return res.json(trail).status(201);
});


app.listen(PORT, () => {
    console.log(`REST API server running on port: ${PORT}`);
});
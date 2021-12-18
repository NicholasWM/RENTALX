import { categoriesRoutes } from "./routes/categories.routes";

const express = require("express");
const app = express();
app.use(express.json())
app.use('/categories',categoriesRoutes)
app.post('/courses', (req, res)=> {
    const {name} = req.body;

    return res.json({name})
})

app.listen(3333, ()=> console.log("Server is running"))
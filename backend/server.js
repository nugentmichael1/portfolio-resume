import express from "express"
import cors from "cors"
import languages from "./api/languages.route.js"
import projects from "./api/projects.route.js"

const app = express()

//enables cross origin resource sharing
app.use(cors())

//parses requests' json data.  
//probably don't need this middleware. The only two routes are static database queries, and their code is stored within the backend. (ie. there are no dynamic requests from the frontend that requires json format).
app.use(express.json())

//"languages" route
app.use("/api/v1/languages", languages)

//"projects" route
app.use("/api/v1/projects", projects)

//error route for anything else
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app
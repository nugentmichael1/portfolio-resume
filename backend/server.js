import express from "express"
import cors from "cors"
import languages from "./api/languages.route.js"
import projects from "./api/projects.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/languages", languages)
app.use("/api/v1/projects", projects)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app
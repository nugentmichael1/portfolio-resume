import express from "express"
import cors from "cors"
import languages from "./api/languages.route.js"
import projects from "./api/projects.route.js"
import path from "path"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/languages", languages)
app.use("/api/v1/projects", projects)


// --------------- deployment -------

const __dirname = path.resolve();
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))

    console.log('Deployment Debug: process.env.NODE_ENV=',process.env.NODE_ENV)

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}
else{
    app.get("/",(req,res)=>{
        res.send("API is running..");
    });
}
// --------------- /deployment -------

app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app
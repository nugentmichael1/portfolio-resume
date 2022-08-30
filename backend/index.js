import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import languagesDAO from "./dao/languagesDAO.js"
import projectsDAO from "./dao/projectsDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000
// The ".env" file needs to be located in the same directory as the "node index.js" call is made.

MongoClient.connect(
    process.env.RESUME_PORTFOLIO_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await languagesDAO.injectDB(client)
    await projectsDAO.injectDB(client)
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
})
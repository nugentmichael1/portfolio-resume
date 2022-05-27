import ProjectsDAO from "../dao/projectsDAO.js"

export default class ProjectsController{
    static async apiGetProjects(req, res, next){

        const result = await ProjectsDAO.getProjects()

        res.json(result)
    }
}
let projects

export default class ProjectsDAO {
    static async injectDB(conn) {

        if (projects) return

        try {
            projects = await conn.db(process.env.RESUME_PORTFOLIO_NS).collection("Projects")
        } catch (e) {
            console.error(`Unable to establish a collection handle in ProjectsDAO: ${e}`)
        }
    }

    static async getProjects() {

        try {
            const myCursor = await projects.find({},
                {
                    projection: { _id: 0 }
                }
            )
                .sort({ Name: 1 })

            const results = await myCursor.toArray()

            return results

        } catch (e) {
            console.error(`Unable to issue find command in getProjects, ${e}`)
            return []
        }
    }


}
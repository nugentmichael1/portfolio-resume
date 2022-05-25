let languages

export default class LanguagesDAO {
    static async injectDB(conn) {

        if (languages) {
            return
        }
        try {
            languages = await conn.db(process.env.RESUME_PORTFOLIO_NS).collection("Languages")
        } catch (e) {
            console.error(`Unable to establish a collection handle in languagesDAO: ${e}`,)
        }
    }

    static async getLanguages() {
        try {
            const myCursor = await languages.find({},
                {
                    projection: { Title: 1, Confidence: 1, _id: 0 }
                }
            )
                .sort({ Confidence: 1 })

            const results = await myCursor.toArray();

            return results;
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return [] 
        }
    }
}
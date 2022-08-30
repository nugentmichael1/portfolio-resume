import LanguagesDAO from "../dao/languagesDAO.js";

export default class LanguagesController {
    static async apiGetLanguages(req, res, next) {

        console.log("Debug: LanguagesController.apiGetLanguages() accessed")
        
        const result = await LanguagesDAO.getLanguages()

        console.log("Debug: Finished with LanguagesDAO.getLanguages()")

        res.json(result)
    }


}
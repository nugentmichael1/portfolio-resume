import LanguagesDAO from "../dao/languagesDAO.js";

export default class LanguagesController {
    static async apiGetLanguages(req, res, next) {

        const result = await LanguagesDAO.getLanguages()

        res.json(result)
    }


}
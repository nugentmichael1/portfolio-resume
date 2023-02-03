// Controller for Work Experience data


const experienceDAO = require("../DAOs/experienceDAO")

class experienceCtrl {
    static async getAll(req, res, next) {

        const results = await experienceDAO.api.getAll()

        res.send(results)
    }
}

exports.api = experienceCtrl
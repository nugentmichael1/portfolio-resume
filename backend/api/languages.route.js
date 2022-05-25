import express from "express"
import LanguagesCtrl from "./languages.controller.js"

const router = express.Router()

router.route("/").get(LanguagesCtrl.apiGetLanguages)

export default router
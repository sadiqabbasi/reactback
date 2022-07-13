const express = require ('express')
const dataRoute = require('../Components/Bollywood');

const detailRouter = express.Router()
detailRouter.route("/bollywood")
.get(dataRoute.apiController)
module.exports =detailRouter
const express = require ('express')
const dataRoute = require('../Components/Technology');

const detalisRouter = express.Router()
detalisRouter.route("/technology")
.get(dataRoute.dbdata)
module.exports =detalisRouter
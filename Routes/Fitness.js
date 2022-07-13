const express = require ('express')
const dataRoute = require('../Components/Fitness');

const detalisRouter = express.Router()
detalisRouter.route("/fitness")
.get(dataRoute.dbdata)
module.exports =detalisRouter
const express = require ('express')
const dataRoute = require('../Components/Hollywood');

const detalisRouter = express.Router()
detalisRouter.route("/hollywood")
.get(dataRoute.dbdata)
module.exports =detalisRouter
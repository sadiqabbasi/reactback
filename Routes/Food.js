const express = require ('express')
const dataRoute = require('../Components/Food');

const detalisRouter = express.Router()
detalisRouter.route("/food")
.get(dataRoute.dbdata)
module.exports =detalisRouter
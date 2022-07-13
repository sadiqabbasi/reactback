const express = require ('express')
const dataRoute = require('../Components/Home');

const detalisRouter = express.Router()
detalisRouter.route("/home")
.get(dataRoute.dbdata)
module.exports =detalisRouter
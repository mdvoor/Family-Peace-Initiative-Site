const express = require('express')
const controller = require('../routes/controllers/dbControllers')
const dbRoutes = express.Router()

dbRoutes.post('/createNewAccnt', controller.createNewAccnt)

dbRoutes.post('/signIn', controller.signIn)

dbRoutes.post('/userInfo', controller.userInfo)
  
dbRoutes.post('/saveRiver', controller.saveRiver)

dbRoutes.post('/editRiver', controller.editRiver)

dbRoutes.post('/saveAceScore', controller.saveAceScore)

dbRoutes.post('/changeResults', controller.changeResults)

module.exports = dbRoutes


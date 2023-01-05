//serves account pages when user has logged in
const acctRoutes = require('express').Router()
const Users = require('../../api/models/userSchema')

acctRoutes.get('/:page/:userID', async (req,res)=>{
   const pageRoutes = ['indexAcct','myAcct','riverAcct','changeAcct','acesAcct','acesQuizAcct']
   const userAcct = await Users.findById(req.params.userID);
   const user = userAcct._id

   if(user && pageRoutes.includes(req.params.page)){
    res.render(req.params.page,{user})
   }else{
       res.render('error')
   }
})

module.exports = acctRoutes
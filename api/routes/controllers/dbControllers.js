const Users = require('../../models/userSchema')

module.exports = {

    async createNewAccnt(req,res){
        let userAcct =  await Users.create(req.body)
        let user = userAcct._id
        res.render('myAcct',{user})
    },
    async signIn(req,res){
        let formInfo = req.body
        console.log(req.body)
        let userAcct = await Users.findOne({email:formInfo.email, password:formInfo.password})
        console.log(userAcct)
        
        if(userAcct !== null){
            let user = userAcct._id
            res.render('myAcct',{user})
        }else{
            res.render('noAcct')
        }
    },
    async userInfo(req,res){
        let user = await Users.findById(req.body.userID)
        res.send(user)
    },
    async saveRiver(req,res){
        let userObj = req.body
        let user = await Users.updateOne({_id:userObj.userID},{$set:{riverAnswers:userObj.answers}})
        res.render('myAcct')
    },
    async editRiver(req,res){
        let userObj = req.body
        let user = await Users.updateOne({_id:userObj.userID},{$set:{riverAnswers:userObj.editedAnswers}})
        res.render('myAcct')
      },
      async saveAceScore(req,res){
        let userObj = req.body
        let user = await Users.updateOne({_id:userObj.userID},{$set:{aceScore:userObj.aceScore}})
      },
      async changeResults(req,res){
        let userObj = req.body
        const user = await Users.updateOne({_id:userObj.userID},{$set:{changeProgress:userObj.answers}})
      }
}
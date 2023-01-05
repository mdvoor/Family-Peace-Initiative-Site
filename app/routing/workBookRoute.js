
const path = require('path');

const workBook = require(path.join(__dirname, "../data/riverWorkBook.json"))
const workBookRoute = require('express').Router();

let riverAnswers = {
    cruelties:'',
    emotions:'',
    defenses:'',
    consequences:'',
    beliefs:''
}

workBookRoute.get('/riverWorkBook', (req,res)=>{
    res.send(workBook);
});

workBookRoute.post('/workbookAnswers', (req,res)=>{
    let userInput = req.body;
    switch (userInput.subject){
        case 'cruelties':
        riverAnswers.cruelties = userInput.text;
        break;
        case 'emotions':
        riverAnswers.emotions = userInput.text;
        break;
        case 'defenses':
        riverAnswers.defenses = userInput.text;
        break;
        case 'consequences':
        riverAnswers.consequences = userInput.text;
        break;
        case 'beliefs':
        riverAnswers.beliefs = userInput.text;
        break;
    }
})

workBookRoute.get('/workbookAnswers', (req,res)=>{
    res.send(riverAnswers);
});

module.exports = workBookRoute;
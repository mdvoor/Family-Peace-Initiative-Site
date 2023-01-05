$(()=>{
let userID = $('body').attr('data-user');
let answersArr = [];
//possible choices for input catagories
$('input').on('click',function(e){
    let target = e.target;
    let targetName = target.name;
    if(target.getAttribute('class')==='box'){
        answersArr.push(targetName);
        target.setAttribute('class','clicked');
    }else{
        answersArr.splice(answersArr.indexOf(targetName),1);
        target.setAttribute('class','box');
    }
})

$('#submit').on('click',function(e){
    if($('li:first').text() === "Sign Out"){
        let answersObj = {
            userID : userID,
            answers : answersArr
        }
        $.post('/changeResults',answersObj);
    }

    let cruelty = 0, cruelty2 = 0, blame = 0, blame2 = 0, projection = 0, projection2 = 0, force = 0, force2 = 0, emo = 0, emo2 = 0, parent = 0, parent2 = 0, disrespect = 0, disrespect2 = 0, mind = 0, mind2 = 0;
    
    for(let i in answersArr){
        switch (answersArr[i]){
            case 'cruelty':
            cruelty++;
            break;
            case 'cruelty2':
            cruelty2++;
            break;
            case 'blame':
            blame++;
            break;
            case 'blame2':
            blame2++;
            break;
            case 'projection':
            projection++;
            break;
            case 'projection2':
            projection2++;
            break;
            case 'force':
            force++;
            break;
            case 'force2':
            force2++;
            break;
            case 'emo':
            emo++;
            break;
            case 'emo2':
            emo2++;
            break;
            case 'parent':
            parent++;
            break;
            case 'parent2':
            parent2++;
            break;
            case 'disrespect':
            disrespect++;
            break;
            case 'disrespect2':
            disrespect2++;
            break;
            case 'mind':
            mind++;
            break;
            case 'mind2':
            mind2++;
            break;
        }
    }
    $('.cruelty').css({'width':`${(cruelty/9)*100}%`})
    $('.cruelty2').css({'width':`${(cruelty2/5)*100}%`})
    $('.blame').css({'width':`${(blame/5)*100}%`})
    $('.blame2').css({'width':`${(blame2/4)*100}%`})
    $('.projection').css({'width':`${(projection/4)*100}%`})
    $('.projection2').css({'width':`${(projection2/4)*100}%`})
    $('.force').css({'width':`${(force/6)*100}%`})
    $('.force2').css({'width':`${(force2/6)*100}%`})
    $('.emo').css({'width':`${(emo/8)*100}%`})
    $('.emo2').css({'width':`${(emo2/5)*100}%`})
    $('.parent').css({'width':`${(parent/10)*100}%`})
    $('.parent2').css({'width':`${(parent2/8)*100}%`})
    $('.disrespect').css({'width':`${(disrespect/5)*100}%`})
    $('.disrespect2').css({'width':`${(disrespect2/6)*100}%`})
    $('.mind').css({'width':`${(mind/6)*100}%`})
    $('.mind2').css({'width':`${(mind2/7)*100}%`})
})
})//end of ready function
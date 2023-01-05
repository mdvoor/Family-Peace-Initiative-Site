let text = null;
let clickCount = 0;

let riverObj = {
    userID:'',
    answers:{
        cruelties:'',
        emotions:'',
        defenses:'',
        consequences:'',
        beliefs:''
    }
}
$.get('/riverWorkBook',(data)=>{
    text = data;
    $(document).trigger('textLoaded');
})
$(document).on('textLoaded', ()=>{
    if(text){
        $('.workbook').html(text[clickCount][0])
    }  
});

$('#next').on('click',()=>{
    if(clickCount !== 0){
        $('#back').show();
    }
    if(clickCount === 29){
        $('#next').text("Build Your River");
    }
    if(clickCount === 30){
        $('#next').hide();
        $('#back').hide();
        return showRiver();
    }
    let textbox = $('.textInput');
    if(textbox.val()!==''){
        if(textbox.length===1){
            switch (textbox.attr('data-attribute')){
                case 'cruelties':            
                riverObj.answers.cruelties = textbox.val();
                $('.textInput').val(riverObj.answers.cruelties);
                break;
                case 'emotions':
                riverObj.answers.emotions = textbox.val();
                break;
                case 'defenses':
                riverObj.answers.defenses = textbox.val();
                break;
                case 'consequences':
                riverObj.answers.consequences = textbox.val();
                break;
                case 'beliefs':
                riverObj.answers.beliefs = textbox.val();
                break;
            } 
        }
    }else{
        if($('.warning').length === 0){
            textbox.before('<p class="warning" style="color:red">Please enter your answers to continue!</p>')
        }
        textbox.css('border','2px solid red')
        return;
    }
    clickCount++;
    $('.workbook').html(text[clickCount][0])
})
$('#back').on('click',()=>{
    if(clickCount <= 1){
        $('#back').hide();
    }
    if(clickCount === 30){
        $('#next').text("next");
    }
    clickCount--;
    $('.workbook').html(text[clickCount][0]);
    switch ($('.textInput').attr('data-attribute')){
        case 'cruelties':
        $('.textInput').val(riverObj.answers.cruelties);
        break;
        case 'emotions':
        $('.textInput').val(riverObj.answers.emotions);
        break;
        case 'defenses':
        $('.textInput').val(riverObj.answers.defenses);
        break;
        case 'consequences':
        $('.textInput').val(riverObj.answers.consequences);
        break;
        case 'beliefs':
        $('.textInput').val(riverObj.answers.beliefs);
        break;
    }
    let textAreaCount = [9,12,20,23,26]

    if(textAreaCount.includes(clickCount)){
        if($('.warning').length === 0){
            $('.textInput').before('<p class="warning" style="color:red">Warning! Going back beyond this point will reset your answers!</p>')
        }
        $('.textInput').css('border','2px solid red')
        return;
    }
})

let showRiver =()=>{
    if($('li:first').text() === 'Sign Out'){
        riverObj.userID = userID;
        $.post('/saveRiver', riverObj);
    }
    $('.workbook').hide();
    $('.intro').append(`
    <h2 class="u-center-text">Your Personal River</h2>
            <div class="container">
                 <div class="wbBox" id="cruelties">
                    <h4 class="wbHeading">Cruelty</h4>
                    <p>${riverObj.answers.cruelties}</p>
                </div>
                <div class="wbBox" id="emotions">
                    <h4 class="wbHeading">Adverse<br>Emotions</h4>
                    <p>${riverObj.answers.emotions}</p>
                </div>
                <div class="wbBox" id="defenses">
                    <h4 class="wbHeading">Defenses</h4>
                    <p>${riverObj.answers.defenses}</p>
                </div>
                <div class="wbBox" id="consequences">
                    <h4 class="wbHeading">Unintended<br>Consequences</h4>
                    <p>${riverObj.answers.consequences}</p>
                </div>
                <div class="wbBox" id="beliefs">
                    <h4 class="wbHeading">Beliefs</h4>
                    <p>${riverObj.answers.beliefs}</p>
                </div>
            </div>`)

    if($('li:first').text() === 'Sign Out'){
        $('.intro').after(`<a href="/myAcct/${userID}" id="myAcctBtn" class="btn btn--green">My Account</a>`)
      }else{
        $('.intro').after(`<a href="/" id="homeBtn" class="btn btn--green">Home</a>`)  
      }
   };

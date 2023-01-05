$(()=>{

let text = null;
let clickCount = 0;

$.get('/riverWorkBook',function(data){
    text = data;
    $(document).trigger('textLoaded');
})

$(document).on('textLoaded', function() {
    $('.workbook').html(text[clickCount][0])
   });


$('#next').on('click',function(){
    if(clickCount === 29){
        $('#next').text("Build Your River");
    }
    if(clickCount === 30){
        return showRiver();
    }
    let textbox = $('.textInput');
    if(textbox.val()!==''){
        if(textbox.length===1){
            let entryObj = {
                subject : '',
                text : textbox.val()
            };
            switch (textbox.attr('data-attribute')){
                case 'cruelties':
                entryObj.subject = 'cruelties';
                break;
                case 'emotions':
                entryObj.subject = 'emotions';
                break;
                case 'defenses':
                entryObj.subject = 'defenses';
                break;
                case 'consequences':
                entryObj.subject = 'consequences';
                break;
                case 'beliefs':
                entryObj.subject = 'beliefs';
                break;
            }
            $.post('/workbook',entryObj);
        }
    }else{
        textbox.css('border','2px solid red')
        return;
    }
    clickCount++;
    $('.workbook').html(text[clickCount][0])
})

let riverObj;
function showRiver(){
    $('#next').remove();
    $.get('/workbook',function(data){
        riverObj = data;
        $(document).trigger('riverDataLoaded');
    })
}
$(document).on('riverDataLoaded', function() {
    $.post('/saveRiver', riverObj);
    $('.workbook').hide();
    $('.intro').append(`
    <h2 class="u-center-text">Your Personal River</h2>
            <div class="container">
                 <div class="wbBox" id="cruelties">
                    <h4 class="wbHeading">Cruelty</h4>
                    <p>${riverObj.cruelties}</p>
                </div>
                <div class="wbBox" id="emotions">
                    <h4 class="wbHeading">Adverse<br>Emotions</h4>
                    <p>${riverObj.emotions}</p>
                </div>
                <div class="wbBox" id="defenses">
                    <h4 class="wbHeading">Defenses</h4>
                    <p>${riverObj.defenses}</p>
                </div>
                <div class="wbBox" id="consequences">
                    <h4 class="wbHeading">Unintended<br>Consequences</h4>
                    <p>${riverObj.consequences}</p>
                </div>
                <div class="wbBox" id="beliefs">
                    <h4 class="wbHeading">Beliefs</h4>
                    <p>${riverObj.beliefs}</p>
                </div>
            </div>
            <a href="/myAcct" id="homeBtn" class="btn btn--green">My Account</a>
    `)
   });


})//end of ready function

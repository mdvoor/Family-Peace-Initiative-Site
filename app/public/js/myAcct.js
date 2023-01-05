let userID = $('body').attr('data-user')
console.log(userID)
let userObj = {
  userID
}
console.log(userObj)
let currentUser = null;

$.post('/userInfo',userObj).then((data)=>{
  currentUser = data;
console.log(data)
$('#userName').text(currentUser.firstName)
  if(!currentUser.riverAnswers.length){
       $('.riverContainer').html(
       `<h3 class="def-head u-margin-bottom-small">You have not completed the river exercise.</h3>
       <form action="http://localhost:8080/riverAcct/${userID}" method="GET">
           <button type="submit" class="btn btn--go">Build Your River</button>
       </form>`)
  }else{
        $('.riverContainer').html(`
         <h2 class="u-center-text">Your Personal River</h2>
         <h4 class="u-center-text">Click to edit</h4>
         <div class="container">
             <div class="wbBox" id="cruelties">
                <h4 class="wbHeading">Cruelty</h4>
                <p id="crueltiesP" contenteditable="true">${currentUser.riverAnswers[0].cruelties}</p>
             </div>
             <div class="wbBox" id="emotions">
                <h4 class="wbHeading">Adverse<br>Emotions</h4>
                <p id="emotionsP" contenteditable="true">${currentUser.riverAnswers[0].emotions}</p>
             </div>
             <div class="wbBox" id="defenses">
                <h4 class="wbHeading">Defenses</h4>
                <p id="defensesP" contenteditable="true">${currentUser.riverAnswers[0].defenses}</p>
             </div>
             <div class="wbBox" id="consequences">
                <h4 class="wbHeading">Unintended<br>Consequences</h4>
                <p id="consequencesP" contenteditable="true">${currentUser.riverAnswers[0].consequences}</p>
             </div>
             <div class="wbBox" id="beliefs">
                <h4 class="wbHeading">Beliefs</h4>
                <p id="beliefsP" contenteditable="true">${currentUser.riverAnswers[0].beliefs}</p>
             </div>
         </div>
         <a href="http://localhost:8080/myAcct/${userID}" id="editBtn" class="popup__close btn btn--home">Save Changes</a>`)

        $('#editBtn').on('click',function(){
            let riverObj = {
              userID,
              editedAnswers:{
                cruelties:$('#crueltiesP').text(),
                emotions:$('#emotionsP').text(),
                defenses:$('#defensesP').text(),
                consequences:$('#consequencesP').text(),
                beliefs:$('#beliefsP').text()
              } 
            }
            $.post('/editRiver',riverObj).then(function(data){
                currentUser = data;
            })
        })
    }
    
  if(currentUser.aceScore === undefined){
        $('.aceContainer').html(`
        <h3 class="def-head">You have not completed the Ace Quiz.</h3>
        <form action="http://localhost:8080/acesQuizAcct/${userID}" method="GET">
          <button type="submit" class="btn btn--go">Take the Quiz</button>
        </form>`)
  }else{
        $('.aceContainer').html(`
            <h3 class="def-head">Your ACE Score is:</h3>
            <p class="centerNum">${currentUser.aceScore}</p>
            <a href="http://localhost:8080/acesQuizAcct/${userID}" class="btn-text" id="storiesLink">Retake the Quiz &rarr;</a>`)
  }

  if(!currentUser.changeProgress.length){
        $('.progressContainer').html(`
            <h3 class="def-head">You have not taken the Change Assessment.</h3>
            <form action="http://localhost:8080/changeAcct/${userID}" method="GET">
              <button type="submit" class="btn btn--go">Test Your Progress</button>
            </form>`)
  }else{
        $('.progressContainer').html(` 
            <div class="text-dark card-body bg-pastel card py-5">
            <h3 class="center u-margin-bottom-small emoH3">Emotional Strengths &amp; Risk Factors</h3>
            <p class="center u-margin-bottom-small emoP">Assessment Results:</p>
            <hr>
            <div class="progressFlex">
                <div class="progressSection">
                  <h3 class="center emoTitle">Risk Factors</h3>
                  <h4 class="titles">Domination &amp; Control</h4>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger cruelty" style="width:0%"></div>
                  </div>
                  <h4 class="titles">Minimization, Denial &amp; Blame</h4>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger blame" style="width:0%"></div>
                  </div>
                  <h4 class="titles">Projection</h4>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger projection" style="width:0%"></div>
                  </div>
                  <h4 class="titles">Coercion, Criticism &amp; Force</h4>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger force" style="width:0%"></div>
                  </div>
                  <h4 class="titles">Emotional Cruelty</h4>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger emo" style="width:0%"></div>
                  </div>
                  <h4 class="titles">Self-Centered Parenting</h4>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger parent" style="width:0%"></div>
                  </div>
                  <h4 class="titles">Sexual Disrespect</h4>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger disrespect" style="width:0%"></div>
                  </div>
                  <h4 class="titles">Privilege &amp; Mind Games</h4>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-danger mind" style="width:0%"></div>
                  </div>
                </div>
                <div class="progressSection">
                    <h3 class="center emoTitle">Strengths</h3>
                    <h4 class="titles">Peaceful Interaction</h4>
                    <div class="progress mb-3">
                      <div class="progress-bar bg-primary cruelty2" style="width:0%"></div>
                    </div>
                    <h4 class="titles">Honesty, Integrity &amp; Accountability</h4>
                    <div class="progress mb-3">
                      <div class="progress-bar bg-primary blame2" style="width:0%"></div>
                    </div>
                    <h4 class="titles">Personal Introspection</h4>
                    <div class="progress mb-3">
                      <div class="progress-bar bg-primary projection2" style="width:0%"></div>
                    </div>
                    <h4 class="titles">Negotiation &amp; Fairness</h4>
                    <div class="progress mb-3">
                      <div class="progress-bar bg-primary force2" style="width:0%"></div>
                    </div>
                    <h4 class="titles">Trust &amp; Partnership</h4>
                    <div class="progress mb-3">
                      <div class="progress-bar bg-primary emo2" style="width:0%"></div>
                    </div>
                    <h4 class="titles">Parenting With Respect</h4>
                    <div class="progress mb-3">
                      <div class="progress-bar bg-primary parent2" style="width:0%"></div>
                    </div>
                    <h4 class="titles">Sexual Respect</h4>
                    <div class="progress mb-3">
                      <div class="progress-bar bg-primary disrespect2" style="width:0%"></div>
                    </div>
                    <h4 class="titles">Healthy Family Relationships</h4>
                    <div class="progress mb-3">
                      <div class="progress-bar bg-primary mind2" style="width:0%"></div>
                    </div>
                </div>
            </div>
        </div>
        <a href="http://localhost:8080/changeAcct/${userID}" class="btn-text" id="storiesLink">Retake the Assessment &rarr;</a>`)

    let cruelty = 0, cruelty2 = 0, blame = 0, blame2 = 0, projection = 0, projection2 = 0, force = 0, force2 = 0, emo = 0, emo2 = 0, parent = 0, parent2 = 0, disrespect = 0, disrespect2 = 0, mind = 0, mind2 = 0;
        for(let i in currentUser.changeProgress){
            switch (currentUser.changeProgress[i]){
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
    }
  })
let finalScore;
// function to select only one answer 
function setAnswer(e) {
  let count = 0;
  let tr = e.parentNode.parentNode;
  let pick = tr.getElementsByTagName("input");
      for(let i in pick) {
        pick[i].className = "y";
      }
    e.className = "selected";
  let input = e.parentNode.parentNode.parentNode;
  let quiz = input.getElementsByTagName("input");
  
  for(let i=0;i<quiz.length;i+=2){
      if(quiz[i].getAttribute('class') === 'selected'){
        count++;
      }
  }
  finalScore = count
}//end of setAnswer function

$('#grade').on('click',()=>{
  let score = document.getElementById('score');
  score.innerHTML = finalScore;
  let userID = $('body').attr('data-user');
  let scoreObj = {
    userID,
    aceScore: finalScore
  }
  $.post('/saveAceScore',scoreObj)
})
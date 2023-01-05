
// function to select only one answer
function setAnswer(e) {
  let tr = e.parentNode.parentNode;
  let pick = tr.getElementsByTagName("input");
      for(let i in pick) {
        pick[i].className = "y";
      }
    e.className = "selected";
  let input = e.parentNode.parentNode.parentNode;
  let quiz = input.getElementsByTagName("input");
  let count = 0;
  for(let i=0;i<quiz.length;i+=2){
      if(quiz[i].getAttribute('class') === 'selected'){
        count++;
      }
  }
  
  let grade = document.getElementById('grade');

  grade.addEventListener('click',function(){
      let score = document.getElementById('score');
      score.innerHTML = count;
  })
}//end of setAnswer function
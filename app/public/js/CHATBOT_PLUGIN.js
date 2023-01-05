const iframe = document.createElement('iframe');

iframe.setAttribute("src", "http://localhost:5010/");
iframe.setAttribute("loading", "lazy");
iframe.setAttribute("title", "chat bot widget")

document.body.appendChild(iframe);
console.log(iframe)

iframe.addEventListener('mouseover', function(){
    console.log('cccc')
});

$.get('http://localhost:5010/here',(data)=>{
    console.log(data)
})


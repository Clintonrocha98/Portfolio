const lingua = document.querySelector('.p3')

window.onload = function(){
    setTimeout(function(){
        lingua.innerHTML = '<p>CSS</p>'
    },2500)
    setTimeout(function(){
        lingua.innerHTML = '<p>Javascript</p>'
    },4500)
    setTimeout(function(){
        lingua.innerHTML = '<p>Front-end developer</p>'
    },6500)

}


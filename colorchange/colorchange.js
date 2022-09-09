
let h1 = document.querySelector('h1')
     let bac = document.querySelector('#por')
     bac.addEventListener('click',function(){
        
let c1 = Math.floor(Math.random()*255+1)
let c2 = Math.floor(Math.random()*255+1)
let c3 = Math.floor(Math.random()*255+1)
let pro = `rgb(${c1} , ${c2} ,${c3})`
    document.body.style.backgroundColor = pro
    h1.innerText = pro 
     })
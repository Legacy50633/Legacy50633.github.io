//for (i=0;i<100;i++){
//let but = document.createElement('button')
//but.innerText = 'Hey!'
//let body = document.querySelector('body')
//body.append(but)

//}
let but = document.querySelectorAll('button')
let body = document.querySelector('body')
let h1s = document.querySelectorAll('h1')
for(let bot of but){
bot.addEventListener('click',function(){
     bot.style.backgroundColor = rancolor()

     
         })
      this.addEventListener('dblclick',function(){
        body.style.backgroundColor = rancolor()
      })  
        
        
        }
         function rancolor(){
            let c1 = Math.floor(Math.random()*255+1)
    let c2 = Math.floor(Math.random()*255+1)
    let c3 = Math.floor(Math.random()*255+1)
    return `rgb(${c1} , ${c2} ,${c3})`
         }
for (let h1 of h1s){
    this.addEventListener('click',function(){
        h1.style.backgroundColor = rancolor()

           })
     this.addEventListener('dblclick',function(eve){
        console.log(eve)
          body.style.backgroundColor = rancolor() 
     })


    }


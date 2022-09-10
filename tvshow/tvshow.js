let button= document.querySelector('button')
let form = document.querySelector('form')
let ul = document.querySelector('ul')

   



form.addEventListener('submit', async function(e){
    e.preventDefault();
    let searchval = form.elements.q.value;
    console.log(searchval)
    const bam = {params:{q:searchval}}
    let tavshow = await axios.get(` https://api.tvmaze.com/search/shows`,bam)
    let data = tavshow.data
    console.log(data) 
   images( tavshow.data)
   form.elements.q.value =''
   
   
    
    
       })
       const images =(shows) =>{
        for(result of shows){
            if(result.show.image){
            let image = result.show.image.medium
            let img = document.createElement('img')
            img.src= image
            ul.append(img)
            }
        }
        

       }
       
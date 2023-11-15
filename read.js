const readmorebtn = document.querySelector('.readmore');
const text = document.querySelector('.text');
const div_cont=document.getElementsByClassName("about-container");

readmorebtn.addEventListener('click',(e)=>{
    text.classList.toggle('showmore');
    if(readmorebtn.innerText === 'Read More'){

        readmorebtn.innerText = 'Read Less';
        
        
    } else{
        readmorebtn.innerText = 'Read More';   
     }
})


  
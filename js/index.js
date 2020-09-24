window.addEventListener('load',()=>{
   const sounds=document.querySelectorAll('.audio');
   const pads=document.querySelectorAll('.pads div');
   const visual =document.querySelector('.visual');
   const colors=[
   '#60d394',
   '#d36060',
   '#af62db',
   '#e6e335',
   '#eb49ad',
   '#eea73d',
   ];

   console.log(sounds);

   pads.forEach((pad,index)=>{
         pad.addEventListener("click",function(){
             sounds[index].currentTime=0;
               sounds[index].play();      

               createBubbles(index);
   });
});
     
const createBubbles=(index)=>{
    const bubble=document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor=colors[index]
    bubble.style.animation='jump 1s ease'
}
   
   

});

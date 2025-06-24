const button = document.getElementById('handlebutton')
const allChildren= document.querySelector('body').children
const head =document.getElementById('head');
for (let i=0; i<allChildren.length; i++){
button.addEventListener('click',()=>{
   head.style.color = "pink",
   head.style.backgroundColor= "green";
   head.style.width =  "500px";
   allChildren.item(i).addEventListener('click',()=>{
    allChildren.item(i).remove();
   })
});
}

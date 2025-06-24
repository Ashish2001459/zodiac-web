const button= document.getElementById('clicked')
const container=document.getElementById('mycon')
button.addEventListener('click',()=>{
    const el= document.createElement('h1');
    el.innerText ='Ashihs kumar'
    container.appendChild(el)
})
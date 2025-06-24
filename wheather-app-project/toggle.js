const button = document.getElementById('handleclick')
const body = document.querySelector('body')
button.addEventListener('click',()=>{
    if(body.style.backgroundColor ==='white'){
             body.style.backgroundColor = 'black',
             button.innerText = 'light'
        }
    else{
        body.style.backgroundColor= 'white',
        button.innerText ='dark';
    }
})
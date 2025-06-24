const button =document.getElementById('search-btn')
const input =document.getElementById('inputext')
const cityname =document.getElementById('city-name');
const citytime =document.getElementById('city-time');
const citytemp =document.getElementById('city-temp');

async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=81f51a43a045415a9c263621251306&q=${cityName}&aqi=yes`)
 return await promise.json();
}
button.addEventListener('click',async()=>{
    const value =input.value;
    const result = await getData(value);
    cityname.innerText = `${result.location.name}, ${result.location.region} -${result.location.country}`;
    citytime.innerText = result.location.localtime;
    citytemp.innerText = result.current.temp_c;
});
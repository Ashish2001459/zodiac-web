const button=document.getElementById('clickme')
const input=document.getElementById('city')
//
const cityname=document.getElementById('cityname');
const citytime=document.getElementById('citytime');
const citytemp=document.getElementById('citytemp');

async function getData(lat,long){
      const promise =await fetch(`http://api.weatherapi.com/v1/current.json?key=1fe01a79a7194558a9d113241250706&q=${lat},${long}&aqi=yes`);
return await promise.json();
}
async function getlocation(position) {
   const result= await getdata(position.coords.latitude,position.coords.longitude);
   console.log(result)    
}
function failedToget(){
    console.log('failed to location')
}
button.addEventListener('click',async()=>{
navigator.geolocation.getCurrentPosition(getlocation,failedToget)
    const value = input.value;
    const result = await getData(value);
    cityname.innerText=`${result.location.name}, ${result.location.region} -${result.location.country}`;
    citytime.innerText = result.location.localtime;
    citytemp.innerText = result.current.temp_c;
});
navigator.bluetooth.requestDevice({
  acceptAllDevices: true
});

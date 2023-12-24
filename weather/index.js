var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik ='1881b8eda2e35046f5f67e0754cd9482'
function convertion(val)
{
    return (val -273).toFixed(3)
}
btn.addEventListener('click', function()
{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
.then(res => res.json())

.then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature= data['main']['temp']
        var windspeed = data['wind']['speed']



        city.innerHTML=`Weatherof<span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${ convertion(temperarture)} C</s` 
        description.innerHTML= `Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML =`Wind speed: <span>${windspeed} km/h<span>`
    })
    .catch(err =>alert('You entered Wrong city name'))
})

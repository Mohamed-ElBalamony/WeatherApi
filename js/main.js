let getDay = document.getElementById('getDay')
let getMonth = document.getElementById('getMonth')
let getCity = document.getElementById('getCity')
let getDeger = document.getElementById('getDeger')
let getIcon = document.getElementById('getIcon')
let getStatus = document.getElementById('getStatus')
let getNextDay = document.getElementById('getNextDay')
let getNextIcon = document.getElementById('getNextIcon')
let getNextDegre = document.getElementById('getNextDegre')
let getMinDegre = document.getElementById('getMinDegre')
let getNextStauts = document.getElementById('getNextStauts')
let getNextDay2 = document.getElementById('getNextDay2')
let getNextIcon2 = document.getElementById('getNextIcon2')
let getNextDegre2 = document.getElementById('getNextDegre2')
let getMinDegre2 = document.getElementById('getMinDegre2')
let getNextStauts2 = document.getElementById('getNextStauts2')

// get API and search 
async function getSearch(city){
    let allResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`)
    let finalResponse = await allResponse.json();
    displayCurent(finalResponse.location,finalResponse.current)
    displayForcest(finalResponse.forecast.forecastday)
    displayForcest2(finalResponse.forecast.forecastday)
    console.log(finalResponse)
}


getSearch('cairo')

// day and month
let dayNams = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// disply Current 

function displayCurent(location,current){
    if(current !=null){

        let date = new Date(current.last_updated.replace(" ", "T"));
        getDay.innerHTML = `${dayNams[date.getDay()]}`;
        getMonth.innerHTML=`${date.getDate() + monthNames[date.getMonth()]}`;
        getCity.innerHTML=`${location.name}`;
        getDeger.innerHTML=`${current.temp_c}<sub>o</sub>C`;
        getIcon.innerHTML=` <img src="https:${current.condition.icon}" alt="">`;
        getStatus.innerHTML=`${current.condition.text}`
}
}

// disply forcest
function displayForcest(forecast){

        let date = new Date(forecast[1].date.replace(" ", "T"));
  
        getNextDay.innerHTML=`${dayNams[date.getDay()]}`;
        getNextIcon.innerHTML=`<img src="https:${forecast[1].day.condition.icon}" alt="">`;
        getNextDegre.innerHTML=`${forecast[1].day.maxtemp_c}<sub>o</sub>C`;
        getMinDegre.innerHTML=`${forecast[1].day.mintemp_c}<sub>o</sub>`;
        getNextStauts.innerHTML=`${forecast[1].day.condition.text}`
    }

function displayForcest2(forecast){

        let date = new Date(forecast[2].date.replace(" ", "T"));
  
        getNextDay2.innerHTML=`${dayNams[date.getDay()]}`;
        getNextIcon2.innerHTML=`<img src="https:${forecast[2].day.condition.icon}" alt="">`;
        getNextDegre2.innerHTML=`${forecast[2].day.maxtemp_c}<sub>o</sub>C`;
        getMinDegre2.innerHTML=`${forecast[2].day.mintemp_c}<sub>o</sub>`;
        getNextStauts2.innerHTML=`${forecast[2].day.condition.text}`
    }

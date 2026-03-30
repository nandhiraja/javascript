import { API_KEY } from "./env.js";

let sendBtn = document.getElementById("send");
let input =  document.getElementById("input")

sendBtn.addEventListener("click", ()=>{

    let userInput=input.value
    console.log(userInput)
    let data = getWeather(userInput);
   

})

let city = document.getElementById("city");
let state = document.getElementById("state");
let country = document.getElementById("country");
let localTime = document.getElementById("local-time");

let condition = document.getElementById("condition");
let humidity = document.getElementById("humidity");
let temperature = document.getElementById("temperature");
let pressure = document.getElementById("pressure");
let windSpeed = document.getElementById("wind-speed");




async function getWeather(user_city){

    let api_data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${user_city}&aqi=no`);
    api_data =  await api_data.json()
    console.log(api_data);
    let data = preprocessData(api_data);

    console.log("Got preprocess data ," , data)

    city.innerText=data.city;
    state.innerText = data.state;
    country.innerText = data.country;
    localTime.innerText = data.localTime;

    condition.innerText = `${data.condition}`;
    humidity.innerText = `${data.humidity} %`;
    temperature.innerText = `${data.temperature} °C`;
    pressure.innerText = `${data.pressure} hPc`;
    windSpeed.innerText = `${data.wind} km/h`
  
}

function preprocessData(data){
    console.log("called preprocessData")
    let current = data.current;
    let location =data.location;
    console.log("current data : ",current );
    console.log("location : ",location)

    data ={
        'city': location.name,
        'state': location.region,
        'country': location.country,
        'localTime':location.localtime,
        'condition': current.condition.text,
        'humidity' : current.humidity,
        'pressure' : current.pressure_in,
        'temperature' : current.temp_c,
        "wind": current.wind_kph
    }
    console.log('final_data :' , data)
    return data
}

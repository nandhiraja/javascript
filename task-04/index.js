import { API_KEY } from "./env.js";

let sendBtn = document.getElementById("send");
let input =  document.getElementById("input")

sendBtn.addEventListener("click", ()=>{

    let userInput=input.value
    console.log(userInput)
    getWeather(userInput)

})

async function getWeather(city){
    let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
    data =  await data.json()
    console.log(data);
}
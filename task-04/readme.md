# Weather App with API Integration

## Objective:
  -  Create a weather app that fetches and displays weather information based on a city name input.

## Requirements:

- Use the Fetch API to retrieve weather data from a public API (e.g.,OpenWeatherMap).
- Parse the JSON response and update the DOM with temperature,
humidity, and weather conditions.
- Implement error handling for invalid input or failed network
requests.


## code

```js

    let api_data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${user_city}&aqi=no`);
    api_data =  await api_data.json()
    console.log(api_data);
    let data = preprocessData(api_data);


```
```js


function preprocessData(data){    // process the JSON data
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

```
```js
    let data = preprocessData(api_data);    // after perprocess the API data update in UI

    city.innerText=data.city;
    state.innerText = data.state;
    country.innerText = data.country;
    localTime.innerText = data.localTime;

    condition.innerText = `${data.condition}`;
    humidity.innerText = `${data.humidity} %`;
    temperature.innerText = `${data.temperature} °C`;
    pressure.innerText = `${data.pressure} hPc`;
    windSpeed.innerText = `${data.wind} km/h`

```

## Preview

https://github.com/user-attachments/assets/17ffc0ef-bd80-4476-8c46-d8be60f49961

<img width="1894" height="982" alt="Image" src="https://github.com/user-attachments/assets/2de0bbc9-fc0c-425a-b77f-8a482595c7c8" />

<img width="1911" height="973" alt="Image" src="https://github.com/user-attachments/assets/84f056ab-8f4c-4f73-952c-25f5bd34bdf7" />


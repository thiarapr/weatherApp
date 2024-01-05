import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default  function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
   
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7e6f5a672b17cf925ff6a878ef48fa65";

   let getWhetherInfo = async()=>{
     let response =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
     let jsonResponse = await response.json();
     
     console.log(jsonResponse);
     let result = {
        cityName: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
       humidity: jsonResponse.main.humidity,
       feelsLike: jsonResponse.main.feels_like,
       weather: jsonResponse.weather[0].description
       }
      
       console.log(result);
       updateInfo (result);
    }

    

    let handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(city);
        setCity("");
        getWhetherInfo();
    }

    let handleChange = (e)=>{
        setCity(e.target.value);
    }
    return(
        <>
        <h1>Search for the city Here </h1>
        <form>
          Enter the city : <input type= "text" label="cityName" value={city} required onChange={handleChange}></input><br></br>
          <button onClick={handleSubmit}>Search</button>
        </form>
    
        </>
    )
}
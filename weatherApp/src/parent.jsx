import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function ParentDiv() {
    let [weatherInfo, setWeatherInfo] = useState({
        cityName: "Toronto",
        feelsLike: -8.95,
        humidity: 67,
        temp: -4.07,
        tempMax: -3.34,
        tempMin: -5.29,
        weather: "overcast clouds"
    });

    let updateInfo = (r) => {
        setWeatherInfo(r);
    };

    return (
        <div>
                    <h1 >Weather Information</h1>
                    <SearchBox updateInfo={updateInfo} />
                    <InfoBox info={weatherInfo} />
                
        </div>
    );
    
}

/* eslint-disable react/prop-types */
export default function InfoBox({info}) {
    

    const styles = `
        .info-card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 20px;
            width: 300px;
            margin: 20px;
        }

        .info-item {
            margin-bottom: 10px;
        }

        strong {
            margin-right: 8px;
            font-weight: bold;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="info-card">
                <h1>Weather information</h1>
                <div className="info-item">
                    <strong>City Name:</strong> {info.cityName}
                </div>
                <div className="info-item">
                    <strong>Feels Like:</strong> {info.feelsLike}
                </div>
                <div className="info-item">
                    <strong>Humidity:</strong> {info.humidity}
                </div>
                <div className="info-item">
                    <strong>Temperature:</strong> {info.temp}
                </div>
                <div className="info-item">
                    <strong>Max Temperature:</strong> {info.tempMax}
                </div>
                <div className="info-item">
                    <strong>Min Temperature:</strong> {info.tempMin}
                </div>
                <div className="info-item">
                    <strong>Weather:</strong> {info.weather}
                </div>
            </div>
        </>
    );
}

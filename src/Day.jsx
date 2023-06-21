import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
} from 'react-icons/ti';

function Day({ date, weatherCode, maxTemperature, minTemperature }) {
  const dayOfWeek = new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
    weekday: 'short',
  });

  return (
    <div className="day">
      <h2>{dayOfWeek}</h2>
      <i>{getIcon(weatherCode)}</i>
      <span>
        {maxTemperature.toFixed(0)}° / {minTemperature.toFixed(0)}°
      </span>
    </div>
  );
}

export default Day;

export function getIcon(code) {
  switch (code) {
    case 0:
      return <TiWeatherSunny />;
    case 1:
      return <TiWeatherPartlySunny />;
    case 2:
      return <TiWeatherPartlySunny />;
    case 3:
      return <TiWeatherCloudy />;
    case 45:
      return <TiWeatherShower />;
    case 48:
      return <TiWeatherShower />;
    case 51:
      return <TiWeatherDownpour />;
    case 53:
      return <TiWeatherDownpour />;
    case 55:
      return <TiWeatherDownpour />;
    case 56:
      return <TiWeatherDownpour />;
    case 57:
      return <TiWeatherDownpour />;
    case 61:
      return <TiWeatherDownpour />;
    case 63:
      return <TiWeatherDownpour />;
    case 65:
      return <TiWeatherDownpour />;
    case 66:
      return <TiWeatherDownpour />;
    case 67:
      return <TiWeatherDownpour />;
    case 71:
      return <TiWeatherSnow />;
    case 73:
      return <TiWeatherSnow />;
    case 75:
      return <TiWeatherDownpour />;
    case 77:
      return <TiWeatherDownpour />;
    case 80:
      return <TiWeatherDownpour />;
    case 81:
      return <TiWeatherDownpour />;
    case 82:
      return <TiWeatherDownpour />;
    case 85:
      return <TiWeatherSnow />;
    case 86:
      return <TiWeatherSnow />;
    case 95:
      return <TiWeatherStormy />;
    case 96:
      return <TiWeatherStormy />;
    case 99:
      return <TiWeatherStormy />;
  }
}

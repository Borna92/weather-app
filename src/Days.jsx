import React from 'react';
import Day from './Day';

function DailyWeather({ data }) {
  return (
    <div className="daily-weather">
      {data.daily.time.map((date, index) => (
        <Day
          key={date}
          date={date}
          weatherCode={data.daily.weathercode[index]}
          maxTemperature={data.daily.temperature_2m_max[index]}
          minTemperature={data.daily.temperature_2m_min[index]}
        />
      ))}
    </div>
  );
}

export default DailyWeather;

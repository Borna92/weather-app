import { getIcon } from './Day';
import { BsWind } from 'react-icons/bs';

function Today({
  timezone,
  current_weather,
  daily,
  setUnits,
  tempUnits,
  setDays,
  days,
  coords,
}) {
  const uvIndex = daily.uv_index_max[0];

  return (
    <div className="today-display">
      <h2>{coords.results ? coords.results[0].name : timezone}</h2>
      <div className="temperature">
        <h1>{current_weather.temperature.toFixed(0)}</h1>
        <button
          onClick={() => setUnits('celsius')}
          className={`${tempUnits === 'celsius' && 'active'}`}
        >
          °C
        </button>
        <i>|</i>
        <button
          onClick={() => setUnits('fahrenheit')}
          className={`${tempUnits === 'fahrenheit' && 'active'}`}
        >
          °F
        </button>
      </div>
      <div className="misc-container">
        <span>
          <i>UV</i> {uvIndex}
        </span>
        <span>
          <i>
            <BsWind />
          </i>
          {current_weather.windspeed} km/h
        </span>
        <select
          className="form-select"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        >
          <option value="1">1 day</option>
          <option value="3">3 days</option>
          <option value="7">7 days</option>
          <option value="14">14 days</option>
          <option value="16">16 days</option>
        </select>
      </div>
    </div>
  );
}
export default Today;

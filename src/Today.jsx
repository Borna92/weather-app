import { getIcon } from './Day';
import { BsWind } from 'react-icons/bs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="today-display">
      <h2>
        {coords.results
          ? `${coords.results[0].name}, ${coords.results[0].admin1}, ${coords.results[0].country}`
          : timezone}
      </h2>
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
        <ThemeProvider theme={darkTheme}>
          <FormControl fullWidth>
            <InputLabel id="days">Days</InputLabel>
            <Select
              // sx={{ color: '#fff' }}
              labelId="days"
              id="values"
              value={days}
              label="Days"
              onChange={(e) => setDays(e.target.value)}
            >
              <MenuItem value={1}>1 day</MenuItem>
              <MenuItem value={3}>3 days</MenuItem>
              <MenuItem value={7}>7 days</MenuItem>
              <MenuItem value={14}>14 days</MenuItem>
              <MenuItem value={16}>16 days</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
}
export default Today;

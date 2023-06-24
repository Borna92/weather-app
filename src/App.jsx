import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Days from './Days';
import Today from './Today';
import Search from './Search';

const API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=43.70&longitude=-79.42&hourly=uv_index,is_day&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,precipitation_probability_max,windspeed_10m_max&current_weather=true&temperature_unit=celsius&forecast_days=14&timezone=auto';

const SEARCH_API =
  'https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=1&language=en&format=json';

function App() {
  const [data, setData] = useState([]);
  const [coords, setCoords] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [tempUnits, setTempUnits] = useState('celsius');
  const [days, setDays] = useState('7');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setLatitude('43.70');
          setLongitude('-79.42');
          console.log(position);
          console.log(error.message);
        }
      );
    } else {
      console.log('weee');
    }
  }, []);

  function fetchData(url) {
    Axios.get(url).then((res) => {
      const response = res.data;
      setData(response);
    });
  }

  let isDay = false;

  if (data && data.current_weather) {
    isDay = data.current_weather.is_day ? true : false;
  }

  function getCoords(term) {
    Axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${term}&count=1&language=en&format=json`
    ).then((res) => {
      const response = res.data;
      setCoords(response);
    });
  }

  useEffect(() => {
    if (coords.results) {
      const { latitude, longitude } = coords.results[0];
      setLatitude(latitude);
      setLongitude(longitude);
    }
  }, [coords]);

  useEffect(() => {
    fetchData(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=uv_index,is_day&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,precipitation_probability_max,windspeed_10m_max&current_weather=true&temperature_unit=${tempUnits}&forecast_days=${days}&timezone=auto`
    );
  }, [days, latitude, longitude, tempUnits]);

  function setUnits(unit) {
    setTempUnits(unit);
  }

  return (
    <>
      {data.daily && (
        <div className={`container ${isDay ? 'day-background' : 'night'}`}>
          <div className="data-container">
            <Search getCoords={getCoords} />
            {coords.results && (
              <>
                <Today
                  {...data}
                  setUnits={setUnits}
                  tempUnits={tempUnits}
                  setDays={setDays}
                  days={days}
                  coords={coords}
                />
                <Days data={data} />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;

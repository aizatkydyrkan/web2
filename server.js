// подключаем библиотеки
require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.static('public'));

// тестовый маршрут
app.get('/', (req, res) => {
  res.send('Server is running');
});

// маршрут погоды
app.get('/weather', async (req, res) => {
  const city = req.query.city;

  // проверка города
  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather`;
    
    const response = await axios.get(url, {
      params: {
        q: city,
        units: 'metric',
        appid: process.env.OPENWEATHER_API_KEY
      }
    });

    const data = response.data;

    const result = {
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      coordinates: {
        lat: data.coord.lat,
        lon: data.coord.lon
      },
      wind_speed: data.wind.speed,
      country_code: data.sys.country,
      rain_last_3h: data.rain ? data.rain['3h'] : 0
    };

    res.json(result);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'City not found or API error' });
  }
});

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
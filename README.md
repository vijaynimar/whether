# Weather API with Redis Caching

This project is a simple Express.js application that fetches weather data from the OpenWeatherMap API and caches the results using Redis. When a request for weather information is made for a specific city, the application first checks if the data for that city is available in Redis. If the data is available, it serves the cached data; otherwise, it fetches fresh data from OpenWeatherMap, caches it, and then serves it.

## Features

- Fetch weather data for a city using OpenWeatherMap API.
- Cache the weather data in Redis to optimize repeated requests.
- Handle CORS to allow cross-origin requests.
- Provides weather details such as temperature, humidity, weather description, and more.

## Prerequisites

- Node.js (v14 or higher)
- Redis (You can use a cloud Redis service like Redis Labs, or run it locally)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weather-api-redis.git
   cd weather-api-redis

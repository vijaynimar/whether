import express from "express";
import Redis from "ioredis";
import cors from "cors";
import fetch from "node-fetch"; // Make sure you have node-fetch installed if needed

const app = express();
app.use(cors());

// Connect to Redis using the provided URL
const red = new Redis("rediss://red-cucf1jjqf0us73cal4h0:qUX37Cali2vmJSSGwlEpgiCQyRV0dhSr@oregon-redis.render.com:6379"); 

const API_key = "046e4ae7b88754a3b86a433ac04ee61c"; // OpenWeatherMap API key

// Weather route
app.get("/weather/:city", async (req, res) => {
    const city = req.params.city;

    // Check if the city data is already cached in Redis
    const cachedData = await red.get(city);
    if (cachedData) {
        return res.send(JSON.parse(cachedData)); // Send cached data if available
    }

    // If not cached, fetch new data from OpenWeatherMap API
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
        .then((response) => response.json());

    // Cache the data in Redis with the city as the key
    await red.set(city, JSON.stringify(data));

    // Return the weather data
    res.status(200).json(data);
});

// Start the server
app.listen(2000, () => {
    console.log("Server started on port 2000");
});

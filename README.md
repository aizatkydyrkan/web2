# Assignment 2 – Backend API Integration & Service Development

## Project Overview
This project is a backend-based web application that retrieves and displays real-time weather data using external APIs.  
All third-party API communication is handled strictly on the **server side**, following best backend security practices.

The application fetches weather data from the **OpenWeather API** and displays it to the user through a simple and responsive interface.

---

## Technologies Used
- Node.js
- Express.js
- Axios
- dotenv
- HTML, CSS, JavaScript

---

## Project Structure
web2/
|--
server.js
package.json
.env
README.md
public/index.html

---

## Setup Instructions

### 1. Clone the repository
git clone <your-github-repo-link>
cd web2

### 2. Install dependencies
npm install

### 3. Create .env file
In the root folder (web2), create a file named .env and add:
OPENWEATHER_API_KEY=9d1cff41f27a85c4157332e099d4ab68

### 4. Start the server
node server.js

Server will run at:
http://localhost:3000

---

## API Usage

### Weather Endpoint

#### GET
/weather?city=CityName

#### Example:
http://localhost:3000/weather?city=London

### Returned Data (JSON)
- temperature
- feels-like temperature
- weather description
-	coordinates (latitude & longitude)
-	wind speed
-	country code
-	rain volume for last 3 hours (if available)

---

## User Interface
A simple frontend is provided using HTML and JavaScript.
Users can enter a city name and retrieve weather data dynamically from the backend server.

The interface is responsive and works on different screen sizes.

---

## Design Decisions
-	API keys are stored securely using environment variables.
-	All API calls are executed on the server side to protect sensitive data.
-	Axios is used for clean and readable HTTP requests.
-	Express is used to manage routes and server logic.
-	Clean and modular structure for easy maintenance and scalability.

---

## How to Test
-	Open browser: http://localhost:3000
-	Enter a city name (e.g., London, Almaty)
-	Click Get Weather
-	View the JSON response displayed on the page

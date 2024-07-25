async function fetchCountries() {
    try {
      let res = await fetch("https://restcountries.com/v3.1/all");
      let countries = await res.json();
      displayCountries(countries);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function fetchWeather(lat, lon) {
    try {
      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ffddcf7e6d47a8129204fe2c582e3fc6`);
      let weatherData = await res.json();
      return weatherData.main.temp;
    } catch (error) {
      console.error(error);
    }
  }
  function displayCountries(countries) {
    let container = document.createElement("div");
    container.className = "container";
  
    let row = document.createElement("div");
    row.className = "row";

    countries.forEach((country,index) => {        var col= document.createElement("div");
        col.className= "col-lg-4";
        col.innerHTML=` <div class="card h-100 mb-3" style="max-width:20rem; ">                                 
                                          <div class="card-header">${country.name.common}</div>
                                          <img src="${country.flags?.png}" class="card-img-top">
                                          <div class="card-body">
                                            <div class="card-text">Capital: ${country.capital}</div>
                                            <div class="card-text">Region: ${country.region}</div>
                                            <div class="card-text">Country Code: ${country.cca3}</div>
                                            <div class="card-text">Latitude: ${country.latlng[0]}</div>
                                            <div class="card-text">Longitude: ${country.latlng[1]}</div>  
                                            <button class="btn btn-primary" id="check-weather-${index}">Click for Weather</button>
                                          </div>
                                      </div>`;
                                  row.append(col);
                                  container.append(row);
                                  document.body.append(container);

    let weather = document.getElementById(`check-weather-${index}`);
    weather.addEventListener("click", async (event) => {
      event.preventDefault();
      let [lat, lon] = country.latlng;
      let tempKelvin = await fetchWeather(lat, lon);
      let tempCelsius = tempKelvin - 273.15;
      let tempFahrenheit = (tempKelvin - 273.15)*(9/5)+32;
      weather.textContent = `Temp: ${tempCelsius.toFixed(2)}°C/${tempFahrenheit.toFixed(2)}°F`;
        
    });  
});
}
fetchCountries();
    

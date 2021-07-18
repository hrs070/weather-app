window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let timeZone = document.querySelector(".location-timezone");
    let icon = document.querySelector(".icon");
    let temperatureSection = document.querySelector(".temperature")

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=6ba1413d418177ef29f0a40edbc6c6f2`;


            async function getWeather() {
                const response = await fetch(api);
                const data = await response.json();
                console.log(data);


                temperatureDegree.textContent = data.main.temp;
                timeZone.textContent = `${data.name}, ${data.sys.country}`;
                temperatureDescription.textContent = data.weather[0].main;
                icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

            }
            getWeather();

        });

    }
})
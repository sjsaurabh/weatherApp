let inputValue = document.getElementById("search");
let search = document.getElementById("btn");
let cityName = document.getElementById("cityName");
let temperture_value = document.getElementById("temperture_value");
let humidity_value = document.getElementById("humidity_value");
let wind_value = document.getElementById("wind_value");

let getInfo = async (e) => {
  // alert('hello')
  e.preventDefault();
  let cityValue = inputValue.value;
  if (cityValue == "") {
    alert("please enter city name before search");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`;
      let responce = await fetch(url);
      let data = await responce.json();
      //    console.log(responce);
      cityName.textContent = `${data.name}/${data.sys.country}`;
      temperture_value.textContent = `${data.main.temp}`;
      humidity_value.textContent = `${data.main.humidity}`;
      wind_value.textContent = `${data.wind.speed}`;
    } catch {
      alert("please enter valid city name");
    }
  }
};
search.addEventListener("click", getInfo);

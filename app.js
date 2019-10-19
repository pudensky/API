window.addEventListener('load', ()=> {
let long;
let lat;
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".locationTimezone");


if(navigator,geolocation){
  navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;


    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = '${proxy}https://api.darksky.net/forecast/5fb74e0dcc700e500459411058c04e5f/${lat},${long}';
  });

fetch(api)
.then(response =>{
  return response.json();
})
.then(data => {
  console.log(data);
  const {temperature, summary} = data.currently;

});
}
});

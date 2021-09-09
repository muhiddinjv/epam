let cities3 = ["New York","Antarctica","Sidney"];
let arr = ["Minsk","Moscow","Kyiv"];
const api3 = "a6d8992fdb1cbddae48cdee434095312";
//d0889ce843a11270e6749177a5118aec -- my 2nd api
const constant3 = document.querySelector('.constant3');
const racing3 = document.querySelector('.racing3');
const tash3 = document.querySelector('.tash3');

let result2 = [[], [], []];
let retryEveryMs3 = 3000;
let retries3 = 6;

function xmlWeather() {

  let request = new XMLHttpRequest();
  (function loop(i, length) {
    if (i >= length) { return; }
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cities3[i]}&appid=${api3}&units=metric`;
    request.open("GET", url);
    request.onreadystatechange = function () {
      if (
        request.readyState === XMLHttpRequest.DONE &&
        request.status === 200
      ) {
        let data2 = JSON.parse(request.responseText);
        result2[0].push({ city: data2.name, weather: data2.main.temp });
        loop(i + 1, length);
      }
    };
    request.send();
  })(0, cities3.length);
  console.log(result2)
}

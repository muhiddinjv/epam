let cities2 = ["New York","Antarctica","Sidney"];
let arr = ["Minsk","Moscow","Kyiv"];
const api2 = "a6d8992fdb1cbddae48cdee434095312";
//d0889ce843a11270e6749177a5118aec -- my 2nd api
const constant2 = document.querySelector('.constant2');
const racing2 = document.querySelector('.racing2');
const tash2 = document.querySelector('.tash2');

let result2 = [[], [], []];
let retryEveryMs2 = 3000;
let retries2 = 6;

function constants2() {

  let request = new XMLHttpRequest();
  (function loop(i, length) {
    if (i >= length) { return; }
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cities2[i]}&appid=${api2}&units=metric`;
    request.open("GET", url);
    request.onreadystatechange = function () {
      if (
        request.readyState === XMLHttpRequest.DONE &&
        request.status === 200
      ) {
        let data2 = JSON.parse(request.responseText);
        let newDiv2 = document.createElement('div');
        let tempStr2 = Math.round(data2.main.temp).toString();
        let temperature2 = tempStr2 > 0 ? "+" + tempStr2 : tempStr2;
        newDiv2.innerHTML = `${data2.name}: ${temperature2}`
        constant2.appendChild(newDiv2)
        result2[0].push({ city: data2.name, weather: temperature2 });
        loop(i + 1, length);
      }
    };
    request.send();
  })(0, cities2.length);
  console.log(result2)
}

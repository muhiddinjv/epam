let cities = ["New York","Antarctica","Sidney","Tashkent",["Minsk","Moscow","Kyiv"]];
// let racers = 
const api = "a6d8992fdb1cbddae48cdee434095312";
//d0889ce843a11270e6749177a5118aec -- my 2nd api
const constant = document.querySelector('.constant');
const racing = document.querySelector('.racing');
const tash = document.querySelector('.tash');

let result = [[], [], []];
let retryEveryMs = 3000;
let retries = 6;

const constants = () => new Promise((resolve,reject) => {
  Promise.all([
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[0]}&appid=${api}&units=metric`),
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[1]}&appid=${api}&units=metric`),
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[2]}&appid=${api}&units=metric`),
  ])
    .then((responses) => {
      // Get a JSON object from each of the responses
      return Promise.all(responses.map(res => res.json()));
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let newDiv = document.createElement('div');
        let tempStr = Math.round(data[i].main.temp).toString();
        let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
        newDiv.innerHTML = `${data[i].name}: ${temperature}`
        constant.appendChild(newDiv)
        result[0].push({ city: data[i].name, weather: temperature });
      }
    }).then(tashkent()).then(race())
    .catch((error) => {
      console.log(error);
      setTimeout(() => {
        retries--;
          tash.innerText = "Retrying promise..." + retries;
          // tash.innerText = "Retrying failed promise..." + retries;
          if(retries==0) {
              return reject(tash.innerText = "Max retries exceeded!");
          }
          constants().then(resolve);
      }, retryEveryMs);
      console.log(retries)
  });
  console.log(result);
})

function tashkent() {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[3]}&appid=${api}&units=metric`)
  .then(res => res.json())
    .then(data => {
      let tempStr = Math.round(data.main.temp).toString();
      let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
      tash.innerHTML = `<div>${data.name}: ${temperature}</div>`;
      result[1].push({ city: data.name, weather: temperature });
    })
    .catch(error => console.log(error));
}

function race(){
    Promise.race([
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[4][0]}&appid=${api}&units=metric`),
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[4][1]}&appid=${api}&units=metric`),
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[4][2]}&appid=${api}&units=metric`),
    ])
    .then(res => res.json())
    .then(data => {
      let tempStr = Math.round(data.main.temp).toString();
      let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
      racing.innerHTML = `<div>${data.name}: ${temperature}</div>`;
      result[2].push({ city: data.name, weather: temperature });
    })
    .catch(error => console.log(error));
}
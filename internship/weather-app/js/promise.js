let cities = ["New York","Paris","Sidney","Tashkent","Antarctica",["Minsk","Moscow","Kiev"]];
const api = "a6d8992fdb1cbddae48cdee434095312";
let result = [[], [], []];

function threeCities() {
  Promise.all([
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[0]}&appid=${api}&units=metric`),
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[1]}&appid=${api}&units=metric`),
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[2]}&appid=${api}&units=metric`),
  ])
    .then((responses) => {
      // Get a JSON object from each of the responses
      return Promise.all(responses.map((response) => response.json()));
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let tempStr = Math.round(data[i].main.temp).toString();
        let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
        result[0].push({ city: data[i].name, weather: temperature });
      }
    }).then(tashkent())
    .catch((error) => {console.log(error)});
    console.log(result);
}

function tashkent() {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[3]}&appid=${api}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      let tempStr = Math.round(data.main.temp).toString();
      let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
      result[1].push({ city: data.name, weather: temperature });
    })
    .catch((error) => {console.log(error)});
    console.log(result);
}

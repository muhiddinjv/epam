let cities = [
  "New York",
  "Antarctica",
  "Sidney",
  "Tashkent",
  ["Minsk", "Moscow", "Kyiv"],
];
const api = "a6d8992fdb1cbddae48cdee434095312";
//d0889ce843a11270e6749177a5118aec -- my 2nd api
const fetchCity = (city) =>
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
  );

const constant = document.querySelector(".constant");
const racing = document.querySelector(".racing");
const tash = document.querySelector(".tash");

let result = [[], [], []];
let retryEveryMs = 3000;
let retries = 6;

const constants = () =>
  new Promise((resolve, reject) => {
    Promise.all([
      fetchCity(cities[0]),
      fetchCity(cities[1]),
      fetchCity(cities[2]),
    ])
      .then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((data) => {
        console.log(data)
        // for (let i = 0; i < data.length; i++) {
        // let newDiv = document.createElement('div');
        let tempStr = Math.round(data[i].main.temp).toString();
        let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
        // newDiv.innerHTML = `${data[i].name}: ${temperature}`
        // constant.appendChild(newDiv)
        // result[0].push({ city: data[i].name, weather: temperature });

        // const city11 = document.querySelector(".city11");
        // const city22 = document.querySelector(".city22");
        // const city33 = document.querySelector(".city33");

        // let c1 = result2[0];
        // let c2 = result2[1];
        // let c3 = result2[2];

        // city11.innerHTML = `${c1[0].city}: ${c1[0].weather}`;
        // city22.innerHTML = `${c1[1].city}: ${c1[1].weather}`;
        // city33.innerHTML = `${c1[2].city}: ${c1[2].weather}`;

        // tash2.innerHTML = `${c2[0].city}: ${c2[0].weather}`;
        // racing2.innerHTML = `${c3[0].city}: ${c3[0].weather}`;
        // }
      })
      .then(tashkent())
      .then(race())
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          retries--;
          tash.innerText = "Retrying promise..." + retries;
          // Retrying failed promise...
          if (retries == 0) {
            return (tash.innerText = "Max retries exceeded!");
          }
          constants().then(resolve);
        }, retryEveryMs);
      });
    console.log(retries);
    // console.log(result);
  });

function tashkent() {
  fetchCity(cities[3])
    .then((res) => res.json())
    .then((data) => {
      let tempStr = Math.round(data.main.temp).toString();
      let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
      tash.innerHTML = `<div>${data.name}: ${temperature}</div>`;
      result[1].push({ city: data.name, weather: temperature });
    })
    .catch((error) => console.log(error));
}

function race() {
  Promise.race([
    fetchCity(cities[4][0]),
    fetchCity(cities[4][1]),
    fetchCity(cities[4][2]),
  ])
    .then((res) => res.json())
    .then((data) => {
      let tempStr = Math.round(data.main.temp).toString();
      let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
      racing.innerHTML = `<div>${data.name}: ${temperature}</div>`;
      result[2].push({ city: data.name, weather: temperature });
    })
    .catch((error) => console.log(error));
}

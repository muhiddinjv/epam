let cities = [
  "New York",
  "Antarctica",
  "Sidney",
  "Tashkent",
  ["Minsk", "Moscow", "Kyiv"],
];
const api = "a6d8992fdb1cbddae48cdee434095312";
//d0889ce843a11270e6749177a5118aec -- my 2nd api
const fetchCity = (city) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
  ).then((response) => response.json());
};

const tash = document.querySelector(".tash");
let retryEveryMs = 3000;
let retries = 6;

const constants = () =>
  new Promise((resolve, reject) => {
    let result = [];
    console.log("fetching promise....");
    Promise.all([
      fetchCity(cities[0]),
      fetchCity(cities[1]),
      fetchCity(cities[2]),
    ])
      .then((data) => {
        result.push(
          data.map((d) => ({
            city: d.name,
            weather: `${d.main.temp > 0 ? "+" : ""}${Math.round(d.main.temp)}`,
          }))
        );
      })
      .then(() => fetchCity(cities[3]))
      .then((tashkent) => {
        result.push([
          {
            city: tashkent.name,
            weather: `${tashkent.main.temp > 0 ? "+" : ""}${Math.round(
              tashkent.main.temp
            )}`,
          },
        ]);
      })
      .then(() => {
        return Promise.race([
          fetchCity(cities[4][0]),
          fetchCity(cities[4][1]),
          fetchCity(cities[4][2]),
        ]);
      })
      .then((racers) => {
        result.push([
          {
            city: racers.name,
            weather: `${racers.main.temp > 0 ? "+" : ""}${Math.round(
              racers.main.temp
            )}`,
          },
        ]);
        console.log(result[0]);
        console.log("fetching promise complete!");
      })
      .then(() => build1(result))
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
    // console.log(retries);
  });

const build1 = (result) => {
  console.log("building promise...");

  const city11 = document.querySelector(".city11");
  const city22 = document.querySelector(".city22");
  const city33 = document.querySelector(".city33");

  const racing = document.querySelector(".racing");

  let c1 = result[0];
  let c2 = result[1];
  let c3 = result[2];

  city11.innerHTML = `${c1[0].city}: ${c1[0].weather}`;
  city22.innerHTML = `${c1[1].city}: ${c1[1].weather}`;
  city33.innerHTML = `${c1[2].city}: ${c1[2].weather}`;

  tash.innerHTML = `${c2[0].city}: ${c2[0].weather}`;
  racing.innerHTML = `${c3[0].city}: ${c3[0].weather}`;

  console.log("building promise complete!");
};

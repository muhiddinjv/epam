let cities2 = [
  "New York",
  "Antarctica",
  "Sidney",
  "Tashkent",
  ["Minsk", "Moscow", "Kyiv"],
];
const api2 = "a6d8992fdb1cbddae48cdee434095312";
//d0889ce843a11270e6749177a5118aec -- my 2nd api

const constant2 = document.querySelector(".constant2");
const racing2 = document.querySelector(".racing2");
const tash2 = document.querySelector(".tash2");
let retryEveryMs2 = 3000;
let retries2 = 6;

async function fetchData(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api2}&units=metric`
  );
  const newData = await response.json();
  return newData;
}

const weather = async () => {
  let result2 = [];
  try {
    console.log("fetching....");
    const constants2 = await Promise.all([
      fetchData(cities2[0]),
      fetchData(cities2[1]),
      fetchData(cities2[2]),
    ]);
    result2.push(
      constants2.map((data3) => ({
        city: data3.name,
        weather: `${data3.main.temp > 0 ? "+" : ""}${Math.round(
          data3.main.temp
        )}`,
      }))
    );
    const tashkent = await fetchData(cities2[3]);

    result2.push([
      {
        city: tashkent.name,
        weather: `${tashkent.main.temp > 0 ? "+" : ""}${Math.round(
          tashkent.main.temp
        )}`,
      },
    ]);

    const racers2 = await Promise.race([
      fetchData(cities2[4][0]),
      fetchData(cities2[4][1]),
      fetchData(cities2[4][2]),
    ]);
    
    result2.push([
      {
        city: racers2.name,
        weather: `${racers2.main.temp > 0 ? "+" : ""}${Math.round(
          racers2.main.temp
        )}`,
      },
    ]);
    console.log(result2);
    console.log("fetching complete!");
    return build(result2);
  } catch (error) {
    console.log(error);
    setTimeout(() => {
      retries2--;
        tash2.innerText = "Retrying promise..." + retries2;
        // Retrying failed promise...
        if(retries2==0) {
            return tash2.innerText = "Max retries exceeded!";
        }
        weather()
    }, retryEveryMs2);
    console.log(retries2);
  }
};

const build = (result2) => {
  const city1 = document.querySelector('.city1');
  const city2 = document.querySelector('.city2');
  const city3 = document.querySelector('.city3');
  
  console.log("building...");
  console.log(result2);

  let c = result2[0];
  let cc = result2[1];
  let ccc = result2[2];

  city1.innerHTML = `${c[0].city}: ${c[0].weather}`;
  city2.innerHTML = `${c[1].city}: ${c[1].weather}`;
  city3.innerHTML = `${c[2].city}: ${c[2].weather}`;
  
  tash2.innerHTML = `${cc[0].city}: ${cc[0].weather}`;
  racing2.innerHTML = `${ccc[0].city}: ${ccc[0].weather}`;

  console.log("building complete!");
};
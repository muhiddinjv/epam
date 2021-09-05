let cities3 = ["New York","Antarctica","Sidney","Tashkent",["Minsk","Moscow","Kyiv"]];
const api3 = "a6d8992fdb1cbddae48cdee434095312";
//d0889ce843a11270e6749177a5118aec -- my 2nd api
const constant3 = document.querySelector('.constant');
const racing3 = document.querySelector('.racing');
const tash3 = document.querySelector('.tash');

let retryEveryMs3 = 3000;
let retries3 = 6;

function fetchData2(city){
  let x = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api3}&units=metric`)
  console.log(x)
  return x;
}


async function weather(){
  let result2 = [[], [], []];
  const rockNroll = await Promise.all([
    fetchData(cities3[0]),
    fetchData(cities3[1]),
    fetchData(cities3[2]),
  ]);
  // let tempr = 
  result2[0].push(
    rockNroll.map((data)=>({city: data.name, weather: `${data.main.temp > 0 ? "+" : ""}${data.main.temp}`,}))
  );

  const data = await fetchData(cities3[3]);
  result2[1].push({city: data.name, weather: `${data.main.temp > 0 ? "+" : ""}${data.main.temp}`})

  await Promise.race([
    fetchData(cities3[4][0]),
    fetchData(cities3[4][1]),
    fetchData(cities3[4][2])
  ]);
  result2[2].push({city: data.name, weather: `${data.main.temp > 0 ? "+" : ""}${data.main.temp}`})
  console.log(result);
  return result;
}
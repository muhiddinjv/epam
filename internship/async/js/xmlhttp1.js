function xmlWeather() {
  let xmlResult = [[],[],[]];
  const xmlapi = "a6d8992fdb1cbddae48cdee434095312";
  let xmlcities = ["New York", "Paris", "Sidney", "Tashkent"];

  const fetchCities = (xmlcity) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${xmlcity}&appid=${xmlapi}&units=metric`;
  };

  let xmlArr = [fetchCities(xmlcities[0]),fetchCities(xmlcities[1]),fetchCities(xmlcities[2])];

  xmlArr.map((xmlUrl) => {
    let req = new XMLHttpRequest();
    req.open("GET", xmlUrl, true);
    req.onreadystatechange = function () {
      if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
        let json = JSON.parse(req.responseText);
        xmlResult[0].push({
          city: json.name,
          weather: `${json.main.temp > 0 ? "+" : ""}${Math.round(json.main.temp)}`,
        })
      }
    };
    req.send();
  });

  const xmlTashkent = () => {
    let req = new XMLHttpRequest();
    req.open("GET", fetchCities(xmlcities[3]), true);
    req.onreadystatechange = function () {
      if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
        let json = JSON.parse(req.responseText);
        xmlResult[1].push({
          city: json.name,
          weather: `${json.main.temp > 0 ? "+" : ""}${Math.round(json.main.temp)}`,
        })
      }
    };
    req.send();
  }
  xmlTashkent();
  setTimeout(() => {
    xmlBuild(xmlResult)
  }, 500);
}

const xmlBuild = (xmlResult) => {
  console.log("building xmlHttp...");
  console.log(xmlResult[0][0]);
  console.log(Object.keys(xmlResult[0]).length);

  const xmlCity1 = document.querySelector('.xmlCity1');
  const xmlCity2 = document.querySelector('.xmlCity2');
  const xmlCity3 = document.querySelector('.xmlCity3');
  const xmlTash = document.querySelector('.xmlTash');

  let x1 = xmlResult[0];
  let x2 = xmlResult[1];
  // let x3 = xmlResult[2];

  xmlCity1.innerHTML = `${x1[0].city}: ${x1[0].weather}`;
  xmlCity2.innerHTML = `${x1[1].city}: ${x1[1].weather}`;
  xmlCity3.innerHTML = `${x1[2].city}: ${x1[2].weather}`;
  
  xmlTash.innerHTML = `${x2[0].city}: ${x2[0].weather}`;

  console.log("building xmlHttp complete!");
};
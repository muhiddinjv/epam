function xmlWeather() {
  let xmlResult = [[], [], []];
  const xmlapi = "a6d8992fdb1cbddae48cdee434095312";
  let xmlcities = ["New York", "Antarctica", "Sidney", "Tashkent"];

  const fetchCities = (xmlcity) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${xmlcity}&appid=${xmlapi}&units=metric`;
  };

  let xmlArr = [
    fetchCities(xmlcities[0]), 
    fetchCities(xmlcities[1]), 
    fetchCities(xmlcities[2])];

  xmlArr.map((xmlUrl) => {
    let req = new XMLHttpRequest();
    req.open("GET", xmlUrl);
    req.onreadystatechange = function () {
      if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
        let json = JSON.parse(req.responseText);
        xmlResult[0].push({
          city: json.name,
          weather: `${json.main.temp > 0 ? "+" : ""}${Math.round(json.main.temp)}`,
        })
      }
      xmlBuild(xmlResult)
    };
    req.send();
  });

  const xmlTashkent = () => {
    let req = new XMLHttpRequest();
    req.open("GET", fetchCities(xmlcities[3]));
    req.onreadystatechange = function () {
      if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
        let json = JSON.parse(req.responseText);
        xmlResult[1].push({
          city: json.name,
          weather: `${json.main.temp > 0 ? "+" : ""}${Math.round(json.main.temp)}`,
        })
        xmlBuild(xmlResult)
      }
    };
    req.send();
  }

  return xmlTashkent();
}

const xmlBuild = (xmlResult) => {
  console.log("building xmlHttp...");
  console.log(xmlResult);

  const xmlCity1 = document.querySelector('.xmlCity1');
  const xmlCity2 = document.querySelector('.xmlCity2');
  const xmlCity3 = document.querySelector('.xmlCity3');
  const xmlTash = document.querySelector('.xmlTash');

  let x1 = xmlResult[0];
  let x2 = xmlResult[1];
  let x3 = xmlResult[2];

  xmlCity1.innerHTML = x1[0]?.city ? `${x1[0]?.city}: ${x1[0]?.weather}` : "loading...";
  xmlCity2.innerHTML = x1[1]?.city ? `${x1[1]?.city}: ${x1[1]?.weather}` : "loading...";
  xmlCity3.innerHTML = x1[2]?.city ? `${x1[2]?.city}: ${x1[2]?.weather}` : "loading...";

  xmlTash.innerHTML = x1[1]?.city ? `${x2[0]?.city}: ${x2[0]?.weather}` : "loading...";

  console.log("building xmlHttp complete!");
};
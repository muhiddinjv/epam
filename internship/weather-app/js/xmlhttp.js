function weather(city) {
  const api = "a6d8992fdb1cbddae48cdee434095312";

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let json = JSON.parse(xhttp.responseText);
      displayResult(json);
    }
  };
  xhttp.open(
    "GET",
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`,
    true
  );
  xhttp.send();
}

const displayResult = (json) => {
  console.log(json);
  document.querySelector('.city1').innerHTML = `
    <div>${json.name} ${json.main.temp}</div>
  `

};

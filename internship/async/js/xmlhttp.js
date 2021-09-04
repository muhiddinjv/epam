function weather() {
  const api = "a6d8992fdb1cbddae48cdee434095312";
  let cities = [
    "New York",
    "Paris",
    "Sidney",
    "Tashkent",
  ];
  // let arr = [];
  let request = new XMLHttpRequest();
  (function loop(i, length) {
    if (i >= length) {
      return;
    }

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${api}`;

    request.open("GET", url);
    request.onreadystatechange = function () {
      if (
        request.readyState === XMLHttpRequest.DONE &&
        request.status === 200
      ) {
        let data = JSON.parse(request.responseText);

        console.log(i + " " + data.name + " " + data.main.temp);

        document.querySelector(".city1").innerHTML = `
          <div>${data.name} ${data.main.temp}</div>
        `;
        loop(i + 1, length);
      }
    };
    request.send();
  })(0, cities.length);
  console.log(arr)
}

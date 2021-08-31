// function weather(city) {
//   const api = "a6d8992fdb1cbddae48cdee434095312";

//   var xhttp = new XMLHttpRequest();

//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       let json = JSON.parse(xhttp.responseText);
//       displayResult(json);
//     }
//   };
//   xhttp.open(
//     "GET",
//     `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`,
//     true
//   );
//   xhttp.send();
// }

// const displayResult = (json) => {
//   console.log(json);
//   document.querySelector(".city1").innerHTML = `
//     <div>${json.name} ${json.main.temp}</div>
//   `;
// };

function weather() {
  const api = "a6d8992fdb1cbddae48cdee434095312";
  let city = [
    "New York",
    "Paris",
    "Sidney",
    "Tashkent",
    // ["Minsk", "Moscow", "Kyiv"],
  ];
  let arr = [];
  let request = new XMLHttpRequest();
  (function loop(i, length) {
    if (i >= length) {
      return;
    }

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${api}`;

    request.open("GET", url);
    request.onreadystatechange = function () {
      if (
        request.readyState === XMLHttpRequest.DONE &&
        request.status === 200
      ) {
        let data = JSON.parse(request.responseText);
        console.log(i + " " + data.name + " " + data.main.temp);
        arr.push("city: "+ data.name + " " + data.main.temp);
        document.querySelector(".city1").innerHTML = `
        <div>${data.name} ${data.main.temp}</div>
      `;
        loop(i + 1, length);
      }
    };
    request.send();
  })(0, city.length);
  console.log(arr)
}

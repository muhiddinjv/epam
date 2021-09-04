let cities = ["New York","Paris","Sidney","Tashkent","Antarctica"];
let racers = ["Minsk","Moscow","Kyiv"]
const api = "a6d8992fdb1cbddae48cdee434095312";
// const api = "d0889ce843a11270e6749177a5118aec"; old but working

let result = [[], [], []];
let retryEveryMs = 1000;
let maxRetries = 5;
let retries = 0;


const retry = () => new Promise((resolve,reject) => {
  const showError = document.querySelector('.showError');
  Promise.all([
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[0]}&appid=${api}&units=metric`),
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[1]}&appid=${api}&units=metric`),
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[2]}&appid=${api}&units=metric`),
  ])
    .then((responses) => {
      // Get a JSON object from each of the responses
      return Promise.all(responses.map(res => res.json()));
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let tempStr = Math.round(data[i].main.temp).toString();
        let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
        result[0].push({ city: data[i].name, weather: temperature });
      }
    }).then(tashkent()).then(race())
    .catch((error) => {
      console.log(error);
      setTimeout(() => {
        retries++;
          showError.innerText = "Retrying failed promise..." + retries;
          if(retries==maxRetries) {
              return reject(showError.innerText = "Maximum retries exceeded!");
          }
          retry().then(resolve);
      }, retryEveryMs);
      console.log(retries)
  });
  console.log(result);
})

function tashkent() {
  fetch(`http://api.openwathermap.org/data/2.5/weather?q=${cities[3]}&appid=${api}&units=metric`)
  .then(res => res.json())
    .then(data => {
      let tempStr = Math.round(data.main.temp).toString();
      let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
      result[1].push({ city: data.name, weather: temperature });
    })
    .catch(error => console.log(error));
}

function race(){
    Promise.race([
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${racers[0]}&appid=${api}&units=metric`),
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${racers[1]}&appid=${api}&units=metric`),
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${racers[2]}&appid=${api}&units=metric`),
    ])
    .then(res => res.json())
    .then(data => {
      let tempStr = Math.round(data.main.temp).toString();
      let temperature = tempStr > 0 ? "+" + tempStr : tempStr;
      result[2].push({ city: data.name, weather: temperature });
    })
    .catch(error => console.log(error));
}

// function fetchWithAutoRetry(weather, maxRetryCount){
//   return new Promise((resolve, reject)=>{
//     let retries = 0;
//     const caller = () =>{
//       weather()
//       .then(data=>resolve(data))
//       .catch(error=>{
//         if(retries < maxRetryCount){
//           retries++;
//           caller();
//         }else{reject(error)}
//       })
//     }
//     retries=1;
//     caller();
//   })
// }

// fetchWithAutoRetry(weather, 5);

// function retry(weather, delay) {
//   return weather(). // run the operation
//       catch(function(reason) { // if it fails
//           return Q.delay(delay). // delay 
//              // retry with more time
//              then(retry.bind(null, operation, delay * 2)); 
//       });
// }

  

// function errorHandling(){
//   var t = 500;
//   var max = 5;

//   function rejectDelay(reason) {
//     return new Promise(function(resolve, reject) {
//       setTimeout(reject.bind(null, reason), t); 
//     });
//   }

//   var p = Promise.reject();
//   for(var i=0; i<max; i++) {
//     p = p.catch(attempt).catch(rejectDelay);
//   }
//   p = p.then(processResult).catch(errorHandler);


//   function attempt() {
//     var rand = Math.random();
//     if(rand < 0.8) {
//       throw rand;
//     } else {
//       return rand;
//     }
//   }
//   function processResult(res) {
//     console.log(res);
//   }
//   function errorHandler(err) {
//     console.error(err);
//   }
// }
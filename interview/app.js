"use strict";
  // Interview Task starts-------------------------------
  // const angle = hour => {
  //   const hourAngle = 360; //Earth spins 360deg;
  //   const hours = 24; // 24 hours a day
  //   return hours * hourAngle;
  // }
  // const angle = hour => {
  //   const hourAngle = 270 / 18;
  //   return hour * hourAngle - 90;
  // }
  // console.log(angle(6)); //0
  // console.log(angle(12)); //90
  // console.log(angle(18)); //180

  // const model = {
  //   background: "red",
  //   width: "100px",
  //   height: "100px",
  //  };

  //  const overlay = {
  //   position:"fixed",
  //   top:"0",
  //   left:"0",
  //   width:'100%',
  //   height:'100%',
  //   background: "lightgreen",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //  };
  // Interview Task ends-------------------------------

// COMPONENT 1 ------------------------------
const ToDoList = () => {  
    
  return (
    <div className="main">
      <div>
        <h1>After EPAM Interview</h1>
        <h3>Suggestions for a candidate</h3>
        <ol>
          <li>JS Core: Event Loop, Queue, Stack; Promises; Generator</li>
          <li>Data Types & Structures: Set, Symbol, Map</li>
          <li>Git: branches, merge, squash/rebase</li>
          <li>Solve more algorithmic tasks</li>
          <li>SHIFT+ALT+F to format code</li>
          <li>OOP: SOLID principles</li>
          <li>CI/CD</li>
        </ol>
        <ChangeText />
      </div>
    </div>
  );
};

//FETCH JSON
class FetchJSON extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
    };
  }

  componentDidMount() {
    fetch("./data.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result.users,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.occupation}</td>
                <td>{user.country}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

// CORE JS COMPONENT 2 ------------------------------
class Core extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        {
          key: 0,
          title: "Event Loop",
          text: (<p>
            "The EL has one simple job - to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, it will take the 1st event from the Queue and will push it to the Call Stack which runs it. Each event is just a function callback. But ff you have a function that takes a long time to execute (aka <b>Blocking</b> function), then you cannot do anything on the web browser during the function’s execution. The webpage just hangs"
          </p>),
          code: `
          SUPER SIMPLE EXAMPLE ------------------------
          // say "Hello"
          console.log("Hello");

          // say "Goodbye" after 2 sec
          setTimeout(()=> console.log("Goodbye!"), 2000);

          // Say "Hello again!"
          console.log("Hello again");


          SUPER HARD EXAMPLE --------------------------
          const asyncJS = () =>{
            setTimeout(()=> console.log("done"), 0);
            
            const start = Date.now();
            const delay = 10000;
            const map = new Set();
        
            while(Date.now() < start + delay){
              let diff = Date.now() - start;
              let sec = Math.trunc(diff / 1000);
              
              if(!map.has(sec)){
                map.add(sec);
                console.log('Waiting ${"sec"} seconds...')
              }
            }
          }
          asyncJS();`,
        },
        {
          key: 1,
          title: "Callback",
          text: (
            <div>
              <p>
                "A callback (CB) is a function passed as an argument to another
                function. It can run after another function has finished. Where
                callbacks really shine are in async functions."
              </p>
              <h5>Pros: Manageable</h5>
              <ul>
                <li>
                  simple: CBs are manageable if there is one source of
                  asynchronism
                </li>
                <li>
                  good choice: stream of events / DOM events (when CBs are
                  called multiple times)
                </li>
              </ul>
              <h5>Const: Pyramid of Doom</h5>
              <ul>
                <li>
                  simple: CBs are manageable if there is one source of
                  asynchronism
                </li>
                <li>
                  good choice: stream of events / DOM events (when CBs are
                  called multiple times
                </li>
              </ul>
            </div>
          ),
          code: `
          Manageable ---------------------------------------
          const show = sum => document.getElementById("demo").innerHTML = sum;
          const calc = (n1, n2, show) => show(n1 + n2) 
          calc(8,3, show); // Calc & then show the result.
          //------ "show" is a callback function here
          
          Callback Hell -----------------------------------
          getData(function(a){
            getMoreData(a, function(b){
              getMoreData(b, function(c){
                getMoreDate(c, function(d){
                  getMoreData(d, function(e){
                    ..............
                  })
                })
              })
            })
          })`,
        },
        {
          key: 2,
          title: "Asynchronous",
          text: "Functions (show) running in parallel with other functions (setTimeout()) are called asynchronous = one function has to wait for another function (like waiting for a file to load, timeout or interval) Click here and wait 3 seconds!",
          code: `
          setTimeout(show, 3000); // Async function here  
          const show = () => document.getElementById("demo").innerHTML = "I Love You!";`,
        },
        {
          key: 3,
          title: "Async Await",
          text: (
            <p>
              Async and await make promises easier to write!
              <b> 1-Async</b> makes a function return a Promise.
              <b> 2-Await</b> makes a function wait for a Promise.
            </p>
          ),
          code: `
          async function show() {
            let myPromise = new Promise((resolve, reject) => {
              setTimeout(() => { resolve("I love You !!"); }, 3000);
            });
            document.getElementById("demo").innerHTML = await myPromise;
          }
          show();`,
        },
        {
          key: 4,
          title: "Promises",
          text: "'Producing code' can take some time. 'Consuming code' must wait for the result. A Promise is an object that links producing code and consuming code.",
          code: `
          let myPromise = new Promise((resolve, reject) => {
          // "Producing Code" (May take some time)
          
            resolve(); // when successful
            reject();  // when error
          });
          
          // "Consuming Code" (Must wait for a fulfilled Promise)
          myPromise.then(
            (value) => { /* code if successful */ },
            (error) => { /* code if some error */ }
          );`,
        },
        {
          key: 5,
          title: "Promise HowTo",
          text: "Promise.then() takes two (optional) arguments, a callback for success and another for failure. You can add a callback for success or failure only",
          code: `
          const show = sum => document.getElementById("demo").innerHTML = sum;

          let myPromise = new Promise((resolve, reject) => {
            let x = 0; // try to change x to 5
            x == 0 ? resolve("OK") : reject("Error");
          });

          myPromise.then(
            (value) => {show(value)},
            (error) => {show(error)}
          );`,
        },
        {
          key: 6,
          title: "Prom Obj Props",
          text: (
            <div>
              <div>A JavaScript Promise object can be:</div>
              <ol>
                <li>Pending</li>
                <li>Fulfilled</li>
                <li>Rejected</li>
              </ol>
              <p>
                The Promise object supports two properties: <b>state</b> and{" "}
                <b>result</b>.
                <br />
                While a Promise object is 'pending' (working), the result is
                undefined.
                <br />
                When a Promise object is 'fulfilled', the result is a value.
                <br />
                When a Promise object is 'rejected', the result is an error
                object."
              </p>
              <table>
                <tbody>
                  <tr>
                    <th>myPromise.state</th>
                    <th>myPromise.result</th>
                  </tr>
                  <tr>
                    <td>"pending"</td>
                    <td>undefined</td>
                  </tr>
                  <tr>
                    <td>"fulfilled"</td>
                    <td>a result value</td>
                  </tr>
                  <tr>
                    <td>"rejected"</td>
                    <td>an error object</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
          code: `
          Promise VS Callback

          1) Callback: setTimeout(() => { myFunction("I love You !!!"); }, 3000);
          const myFunction = value => document.getElementById("demo").innerHTML = value;

          2) Promise: let myPromise = new Promise((resolve, reject) => {
            setTimeout(() => { resolve("I love You !!"); }, 3000);
          });
          myPromise.then((value) => document.getElementById("demo").innerHTML = value;)
          `,
        },
        {
          key: 7,
          title: "Async in Action",
          text: (
            <div>
              <p>This table is displaying data from a local JSON file!</p>
              <FetchJSON />
              <div>
              <p onClick={this.blocking}><b>Blocking:</b> 1)Press F12 2)click here 3)try to click something!</p>
              </div>
            </div>
          ),
          code: `
          async function show() {
            let myPromise = new Promise((resolve, reject) => {
              setTimeout(() => { resolve("I love You !!"); }, 3000);
            });
            document.getElementById("demo").innerHTML = await myPromise;
          }
          show();`,
        },
      ],
    };
  }

  blocking() {
    const task = msg => {
      // time consuming task
      let n = 10000; //change to 10000
      for(n > 0; n--;) console.log(n + " sec");
      console.log(msg);
    };
    console.log("File downloading...");
    task("File downloaded!");
    console.log("Task done!");
  } 

  render() {
    
    return (
      <div className="main accor-wrapper">
        <div className="width70pr">
          <h2
            onClick={() =>
              setTimeout(() => alert("This is asynchronous js baby!"), 3000)
            }
          >
            Core JS (click & wait 3s)
          </h2>

          {this.state.values.map((i) => {
            return (
              <Accordion
                key={i.key}
                title={i.title}
                text={i.text}
                code={i.code}
              />
            );
          })}
        </div>
      </div>
    );
  }
}


// ACCORDION COMPONENT 3----------------------------------
class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <div
          className="accordion"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          {show ? "Hide" : "Show"} {this.props.title}
        </div>

        {show && (
          <div className="panel">
            <div className="p">{this.props.text}</div>
            <div>{this.props.table}</div>
            <pre>{this.props.code}</pre>
          </div>
        )}
      </div>
    );
  }
}

// CHANGETEXT ------------------------------
class ChangeText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "Click",
      brand: "Ford",
      model: "Mustang",
      color: "red",
      owners: ["Bill Clinton", "Will Smith", "Jacky Chan"],
      year: 1964,
    };
  }

  changeValue = () => {
    this.setState({
      action: "Dont click",
      color: "blue",
      brand: "BMW",
      owners: ["You"],
      display: "none",
    });
  };

  render() {
    // const man = { name: "Bill", height: 145 };
    return (
      <div>
        <div>
          <h5 style={{ color: this.state.color }} onClick={this.changeValue}>
            {this.state.action} this {this.state.color} {this.state.brand} owned
            by {this.state.owners[0]}!
          </h5>
        </div>
      </div>
    );
  }
}

// APP ------------------------------
const App = () => {
  return (
    <div>
      <ToDoList />
      <Core />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));

"use strict";

// COMPONENT 1 ------------------------------
const ToDoList = () => {
  return (
    <div className="main">
      <div>
        <h2>After EPAM Interview</h2>
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
      </div>
    </div>
  );
};

// COMPONENT 2 ------------------------------
const Async = () => {
  //const style = { fontSize:"22px" };
  const callBackCode = `
    const show = sum => document.getElementById("demo").innerHTML = sum;
    const calc = (n1, n2, show) => show(n1 + n2) 
    calc(8,3, show); // Calc & then show the result.
    //------ "show" is a callback function here  
  `;
  const asynCode = `
    setTimeout(show, 3000); // Async function here  
    const show = () => document.getElementById("demo").innerHTML = "I Love You!";
  `;

  const promise = `
  let myPromise = new Promise((resolve, reject) => {
    // "Producing Code" (May take some time)
    
      resolve(); // when successful
      reject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );
  `;
  const promiseHowTo = `
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );
  `;
  const callbackVsPromise = `
  // example using Callback -----------------------------------------------
    const callback = value => document.querySelector('h1').innerHTML = value;
    setTimeout(()=>{callback('I love you!')}, 2000)


  // example using Promise -----------------------------------------------
  let ipromise = new Promise((resolve, reject) => {
    let x = false;
    setTimeout(() => { 	
      x == false ? resolve("You love me too!") 
      : reject("But you dont love me!");
    }, 3000);
  });

  ipromise.then(
    (value) => {show(value);},
    (error) => {show(error);}
  );
  ipromise.then(show = value => document.getElementById("demo").innerHTML = value);
  `;

  const asyncFunc = () => {
    setTimeout(() => {
      alert("I love you baby!");
    }, 3000); // Async function here
  };
  return (
    <div className="main">
      <div className="width_600">
        <h3>Asyncronous JS (Event Loop)</h3>
        <div className="callbacks">
          {/* CALLBACKS ----------------------------------------- */}
          <h4>JS Callbacks</h4>
          <p>
            A callback is a function passed as an argument to another function.
            It can run after another function has finished. Where callbacks
            really shine are in async functions.
          </p>
          <pre>{callBackCode}</pre>
        </div>

        {/* ASYNCHRONOUS ----------------------------------------- */}
        <div className="async">
          <h4>JS Asyncronous</h4>
          <p>
            Functions (show) running in parallel with other functions
            (setTimeout()) are called asynchronous = one function has to wait
            for another function (like waiting for a file to load, timeout or
            interval) <i onClick={asyncFunc}>Click here and wait 3 seconds!</i>
          </p>
          <pre>{asynCode}</pre>
        </div>

        {/* PROMISES ----------------------------------------- */}
        <div className="promise">
          <h4>JS Promises</h4>
          <p>
            "Producing code" can take some time. "Consuming code" must wait for
            the result. A Promise is an object that links producing code and
            consuming code.
          </p>
          <pre>{promise}</pre>
          <div>
            <h4>Promise Object Properties</h4>
            <p>A JavaScript Promise object can be:</p>
            <ul>
              <li>Pending</li>
              <li>Fulfilled</li>
              <li>Rejected</li>
            </ul>
            <p>
              The Promise object supports two properties: <b>state</b> and{" "}
              <b>result</b>.
              <br /> While a Promise object is "pending" (working), the result
              is undefined.
              <br /> When a Promise object is "fulfilled", the result is a
              value.
              <br /> When a Promise object is "rejected", the result is an error
              object.
            </p>
          </div>
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
          <div className="note">
            <p>
              You cannot access the Promise properties <b>state</b> and{" "}
              <b>result</b>.
              <br /> You must use a Promise method to handle promises.
            </p>
          </div>
          <div>
            <h4>How to Use a Promise</h4>
            <pre>{promiseHowTo}</pre>
            <div className="note">
              <p>
                Promise.then() takes two (optional) arguments, a callback for
                success and another for failure. You can add a callback for
                success or failure only.
              </p>
              <pre>{callbackVsPromise}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// COMPONENT APP ------------------------------
class App extends React.Component {
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
  changeColor = () => {
    this.setState({
      action: "Dont click",
      color: "blue",
      brand: "BMW",
      owners: ["You"],
    });
  };
  // thisUndefined(){ alert(this) };
  // thisObject=()=>{ alert(this) };
  render() {
    const man = { name: "Bill", height: 145 };

    return (
      <div className="main">
        <div>
          <ToDoList />
          <h5 onClick={this.changeColor}>
            {this.state.action} this {this.state.color} {this.state.brand} owned
            by {this.state.owners[0]}!
          </h5>
          <Async />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

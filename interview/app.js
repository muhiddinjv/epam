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
  const asyncFunc = () => {
    setTimeout(() => {
      alert("I love you baby!");
    }, 3000); // Async function here
  };
  return (
    <div className="main">
      <div>
        <h3>Asyncronous JS (Event Loop)</h3>
        <div className="callbacks">
          {/* CALLBACKS ----------------------------------------- */}
          <h4>JS Callbacks</h4>
          <p className="width_600">
            A callback is a function passed as an argument to another function.
            It can run after another function has finished. Where callbacks
            really shine are in async functions.
          </p>
          <pre className="code width_600">{callBackCode}</pre>
        </div>

        {/* ASYNCHRONOUS ----------------------------------------- */}
        <div className="async">
          <h4>JS Asyncronous</h4>
          <p className="width_600">
            Functions (show) running in parallel with other functions
            (setTimeout()) are called asynchronous = one function has to wait
            for another function (like waiting for a file to load, timeout or
            interval) <i onClick={asyncFunc}>Click here and wait 3 seconds!</i>
          </p>
          <pre className="code width_600">{asynCode}</pre>
        </div>

        {/* PROMISES ----------------------------------------- */}
        <div className="promise">
          <h4>JS Promises</h4>
          <p className="width_600">
            "Producing code" can take some time. "Consuming code" must wait for
            the result. A Promise is an object that links producing code and
            consuming code.
          </p>
          <pre className="code width_600">{promise}</pre>
          <div>
            <h4>Promise Object Properties</h4>
            <p>A JavaScript Promise object can be:</p>
            <ul>
              <li>Pending</li>
              <li>Fulfilled</li>
              <li>Rejected</li>
            </ul>
            <p>The Promise object supports two properties: <b>state</b> and <b>result</b>.</p>
            <p>
              While a Promise object is "pending" (working), the result is undefined.
            </p>
            <p>When a Promise object is "fulfilled", the result is a value.</p>
            <p>
              When a Promise object is "rejected", the result is an error object.
            </p>
          </div>
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
            </tr>
          </table>
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

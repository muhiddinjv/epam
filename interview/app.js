"use strict";

// COMPONENT 1 ------------------------------
const ToDoList = () => {
  return (
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
  const asyncFunc = () => {
    setTimeout(show, 3000); // Async function here  
    const show = () => document.write("I Love You!");
  }
  return (
    <div>
      <h3>Asyncronous JavaScript (Event Loop)</h3>
      <div className="callbacks">

      {/* JAVASCRIPT CALLBACKS */}
        <h4>JS Callbacks</h4>
        <p className="width_600">
          A callback is a function passed as an argument to another function. It
          can run after another function has finished. Where callbacks really
          shine are in async functions, where one function has to wait for
          another function (like waiting for a file to load)
        </p>
        <pre className="code width_600">{callBackCode}</pre>
      </div>

      {/* ASYNCHRONOUS JAVASCRIPT */}
      <div className="async">
        <h4>JS Asyncronous</h4>
        <p className="width_600" onClick={asyncFunc}>
          Functions (calculate) running in parallel with other functions
          (setTimeout()) are called asynchronous. Click here to see the result!
        </p>
        <pre className="code width_600">{asynCode}</pre>
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
      <div>
        <ToDoList />
        <h5 onClick={this.changeColor}>
          {this.state.action} this {this.state.color} {this.state.brand} owned
          by {this.state.owners[0]}!
        </h5>
        <Async />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

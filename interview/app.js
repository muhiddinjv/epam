"use strict";

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
      </div>
    </div>
  );
};

// COMPONENT 2 ------------------------------
class Async extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        title: "Callbacks",
        text: "A callback is a function passed as an argument to another function. It can run after another function has finished. Where callbacks really shine are in async functions.",
        code: `
        const show = sum => document.getElementById("demo").innerHTML = sum;
        const calc = (n1, n2, show) => show(n1 + n2) 
        calc(8,3, show); // Calc & then show the result.
        //------ "show" is a callback function here`,
      },
      {
        title: "Asynchronous",
        text: "Functions (show) running in parallel with other functions (setTimeout()) are called asynchronous = one function has to wait for another function (like waiting for a file to load, timeout or interval) Click here and wait 3 seconds!",
        code: `
        setTimeout(show, 3000); // Async function here  
        const show = () => document.getElementById("demo").innerHTML = "I Love You!";`,
      },
      {
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
          function(value) { /* code if successful */ },
          function(error) { /* code if some error */ }
        );`,
      },
      {
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
          </div>
        ),
        table: (
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
        ),
      },{
        title: "Promise HowTo",
        text: "Promise.then() takes two (optional) arguments, a callback for success and another for failure. You can add a callback forsuccess or failure only",
        code: `
        const show = sum => document.getElementById("demo").innerHTML = sum;

        let myPromise = new Promise((resolve, reject) => {
          let x = 0; // some code (try to change x to 5)
          x == 0 ? resolve("OK") : reject("Error");
        });

        myPromise.then(
          (value) => {show(value)},
          (error) => {show(error)}
        );`,
      },{
        title: "Async (A)wait",
        text: (<p>Async and await make promises easier to write! 
        <b> 1-Async</b> makes a function return a Promise.  
        <b> 2-Await</b> makes a function wait for a Promise.</p>),
        code: `
        async function show() {
          let myPromise = new Promise((resolve, reject) => {
            setTimeout(() => { resolve("I love You !!"); }, 3000);
          });
          document.getElementById("demo").innerHTML = await myPromise;
        }
        show();`,
      },
    ];
  }

  render() {
    return (
      <div className="main">
        <div className="width70pr">
          <h2
            onClick={() =>
              setTimeout(() => alert("This is asynchronous js baby!"), 3000)
            }
          >
            Core JS (click & wait 3s)
          </h2>
          {/* CALLBACKS --------------------------------------------- */}
          <Accordion
            title={this.state[0].title}
            text={this.state[0].text}
            code={this.state[0].code}
          />

          {/* ASYNCHRONOUS ------------------------------------------ */}
          <Accordion
            title={this.state[1].title}
            text={this.state[1].text}
            code={this.state[1].code}
          />

          {/* PROMISES ---------------------------------------------- */}
          <Accordion
            title={this.state[2].title}
            text={this.state[2].text}
            code={this.state[2].code}
          />

          {/* PROMISES-OBJ-PROPS ------------------------------------ */}
          <Accordion
            title={this.state[3].title}
            text={this.state[3].text}
            table={this.state[3].table}
          />

          {/* PROMISES-HowTo ------------------------------------ */}
          <Accordion
            title={this.state[4].title}
            text={this.state[4].text}
            code={this.state[4].code}
          />

          {/* PROMISES-HowTo ------------------------------------ */}
          <Accordion
            title={this.state[5].title}
            text={this.state[5].text}
            code={this.state[5].code}
          />        
        </div>
      </div>
    );
  }
}

// ACCORDION ----------------------------------
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
          <ToDoList />
          <h5 style={{ color: this.state.color }} onClick={this.changeValue}>
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

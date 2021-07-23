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
        title:"Callbacks",
        text:"A callback is a function passed as an argument to another function. It can run after another function has finished. Where callbacks really shine are in async functions.",
        code: `
        const show = sum => document.getElementById("demo").innerHTML = sum;
        const calc = (n1, n2, show) => show(n1 + n2) 
        calc(8,3, show); // Calc & then show the result.
        //------ "show" is a callback function here`
      },{
        title:"Asynchronous",
        text:"Functions (show) running in parallel with other functions (setTimeout()) are called asynchronous = one function has to wait for another function (like waiting for a file to load, timeout or interval) Click here and wait 3 seconds!",
        code: `
        setTimeout(show, 3000); // Async function here  
        const show = () => document.getElementById("demo").innerHTML = "I Love You!";`
      },{
        title:"Promises",
        text:"'Producing code' can take some time. 'Consuming code' must wait for the result. A Promise is an object that links producing code and consuming code.",
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
        howTo: `
        myPromise.then(
          function(value) { /* code if successful */ },
          function(error) { /* code if some error */ }
        );
        `,
      },


      
      ];
  }

  asyncFunc = (props) => {
    setTimeout(() => {
      alert("I love you baby!");
    }, 3000); // Async function here
  };

  render() {
    return (
      <div className="main">
        <div className="width_600">
          <h2>Asyncronous JS (Event Loop)</h2>
          {/* CALLBACKS ----------------------------------------- */}
          <Accordion
            title={this.state[0].title}
            text={this.state[0].text}
            code={this.state[0].code}
          />

          {/* ASYNCHRONOUS ----------------------------------------- */}
          <Accordion
            title={this.state[1].title}
            text={this.state[1].text}
            code={this.state[1].code}
          />

          {/* PROMISES ----------------------------------------- */}
          <div className="promise">
            <h4>JS Promises</h4>
            <p>
              "Producing code" can take some time. "Consuming code" must wait
              for the result. A Promise is an object that links producing code
              and consuming code.
            </p>
            {/* <pre>{this.state.promise}</pre> */}
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
                <br /> When a Promise object is "rejected", the result is an
                error object.
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
              {/* <pre>{this.state.promiseHowTo}</pre> */}
              <div className="note">
                <p>
                  Promise.then() takes two (optional) arguments, a callback for
                  success and another for failure. You can add a callback for
                  success or failure only.
                </p>
                {/* <pre>{this.state.callbackVsPromise}</pre> */}
              </div>
            </div>
            <div>
              <h4>JS Async</h4>
              <div className="note">
                <p>
                  Async and await make promises easier to write! <br /> async
                  makes a function return a Promise <br /> await makes a
                  function wait for a Promise
                </p>
              </div>
              {/* <pre>{this.state.asyncAwait}</pre> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ACCORDION ----------------------------------
class Accordion extends React.Component {
  // const [show, toggleShow] = useState(false);
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
            <p>{this.props.text}</p>
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

  changeColor = () => {
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
      <div className="main">
        <div>
          <ToDoList />
          <h5 style={{ color: this.state.color }} onClick={this.changeColor}>
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

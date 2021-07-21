'use strict';

// COMPONENT 1 ------------------------------
class ToDoList extends React.Component {
    render(){
        return (
            <div>
                <h2>After EPAM Interview</h2>
                <h3>Suggestions for a candidate</h3>
                <ol>
                   <li>JS Core: Event Loop, Queue, Stack; Promises; Generator</li>
                    <li>Data Types & Structures: Set, Symbol, Map</li>
                    <li>Git: branches, merge, squash/rebase</li>
                    <li>Solve more algorithmic tasks</li>
                    <li>OOP: SOLID principles</li>
                    <li>CI/CD</li>
                </ol>
            </div>
        )
    }
}

// COMPONENT 2 ------------------------------
class Async extends React.Component {
    render(){
        return(
            <div>
                <h3>Asyncronous JavaScript (Event Loop)</h3>
                <h4>JS Callbacks</h4>
            </div>
        )
    }
}

// COMPONENT APP ------------------------------
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 'Click', brand: "Ford", model: "Mustang", color: "red",
            owners: ['Bill Clinton','Will Smith','Jacky Chan'],
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({action:'Dont click', color: "blue", brand:'BMW',owners:['You']});
    }
    // thisUndefined(){ alert(this) };
    // thisObject=()=>{ alert(this) };
    render(){
        const man = {name: "Bill", height: 145};
        return (
            <div>
                <ToDoList />
                <h5 onClick={this.changeColor}>
                {this.state.action} this {this.state.color} {this.state.brand} owned by {this.state.owners[0]}!
                </h5>
                <Async />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
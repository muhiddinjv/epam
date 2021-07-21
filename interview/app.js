'use strict';

// COMPONENT 1 ------------------------------
// LikeButton 
class LikeButton extends React.Component {
    render(){
        return (
            <div>
                <h3>After EPAM Interview</h3>
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
                <LikeButton />
                <h5 onClick={this.changeColor}>
                {this.state.action} this {this.state.color} {this.state.brand} owned by {this.state.owners[0]}!
                </h5>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
'use strict';

// COMPONENT 1 ------------------------------
// LikeButton 
class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = { liked: false };
    }

    // liked = () => {
    //     this.setState(alert('hi'));
    // }

    render(){
        if(this.state.liked){
            return 'you liked this'
        }

        return (
            // <button type="button" onClick={this.liked}>Like</button>
            <button onClick={ () => this.setState({ liked: true })}>Like</button>
        )
    }
}

// COMPONENT 2 ------------------------------
// PROPS - Props are like function arguments, 
// and you send them into the component as attributes.
class Ketmon extends React.Component {
    render(){
        return (
            <h5 onClick={()=>{alert(this)}}>
                Click here {this.props.man.name} the retard!
                Are you {this.props.man.height}cm tall?
            </h5>
        )
    }
}

// COMPONENT 3 ------------------------------
// STATE - component properties should be kept in 
//an object called state
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            owners: ['Bill Clinton','Will Smith','Jacky Chan'],
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
    }
    // thisUndefined(){ alert(this) };
    // thisObject=()=>{ alert(this) };
    render(){
        const man = {name: "Bill", height: 145};
        return (
            <div>
                <h5>
                    This is {this.state.color} {this.state.brand} and 
                    its owner is {this.state.owners[0]}
                </h5>
                <Ketmon  man={man}/>
                <Welcome msg={"name"}/>
                <LikeButton />
                <button type="button" onClick={this.changeColor}>Change Color</button>
                <MyForm />
            </div>
        )
    }
}

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};
    }
    output=(e)=>{
        e.preventDefault();
        // const [title, setTitle] = useState('');
        this.setState({ value: this.target.value });
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState({color: "yellow"})
    }, 3000)
}
    componentDidUpdate() {
        setTimeout(() => {
            document.getElementById("mydiv").innerHTML =
            "The updated favorite is " + this.state.color;
        },  1000)
    }
    render(){
        return (
            <form>
                <h1>Hello {this.state.value}</h1>
                Name: <input type="text" />
                <button onClick={this.output}>message</button>
                <div id="mydiv"></div>
            </form>
        )
    }
}

// FORMS -------------------------
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    myChangeHandler = (e) => {
      this.setState({username: e.target.value});
    }
    render() {
      return (
        <form>
        <h1>Hello {this.state.username}</h1>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }

ReactDOM.render(<App />, document.querySelector('#root'));
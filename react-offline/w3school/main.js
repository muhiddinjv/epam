import React from 'react';
import ReactDOM from 'react-dom';
import Ketmon from './Ketmon.js';

// STATE - component properties should be kept in an object called state
class Lapatka extends React.Component {
    constructor() {
        super();
        this.state = {
            lastName: "Bean",
            hobbies: ['swimming','singing','dancing']
        };
    }
    render(){
        return (
            <div>
                <h3>
                    Hi Mr. {this.state.lastName} How are you? 
                    Your hobby is {this.state.hobbies[0]} right?
                </h3>
                <Ketmon  age="22"/>
            </div>
        )
    }
}

ReactDOM.render(<Lapatka />, document.querySelector('#root'));
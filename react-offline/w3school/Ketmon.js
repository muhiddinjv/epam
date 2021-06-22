// PROPS-Props are like function arguments, and you send them into the component as attributes.
import React from 'react';

class Ketmon extends React.Component {
    render(){
        return <h3>Hello {this.props.age} year old retard!</h3>
    }
}

export default Ketmon;
import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {age: this.props.age}
    }
    addYear =() =>{
        this.setState({age: this.state.age+1})
    }
    render() {
        return <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age : {this.state.age}</p>
            <p>Hair color : {this.props.haircolor}</p>
            <button onClick={this.addYear}>Birthday button for {this.props.firstName} {this.props.lastName}</button>
            </div>;
    }
}
    
export default PersonCard;

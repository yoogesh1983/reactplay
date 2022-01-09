import React, { Component } from 'react';
import Child from './Child'

class Parent extends Component{

    constructor(props){
        super(props)
        this.state= {
            current: 0,
        };
    }

    componentDidUpdate(){
        console.log("Parent is re-rendered.....");
    }

    generateValue(e){
        e.preventDefault();
        this.setState({
            current: Math.floor(Math.random() * 3)
        })
    }

    render() {
        return (
            <React.Fragment>
              <p>Current value: <strong>{this.state.current}</strong></p>
              <button onClick={this.generateValue.bind(this)}>Change value</button>
              <Child number={this.state.current}/>
            </React.Fragment>
        )
    }
     
}

export default Parent;



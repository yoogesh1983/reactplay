import React, { Component } from 'react';

class Child extends Component{

    constructor(props){
        super(props)
    }

    componentDidUpdate(){
        console.log("Child is re-rendered.....");
    }

    render() {
        return (
            <React.Fragment>
              <p>Squre of {this.props.number} is {Math.pow(this.props.number, 2)} </p>
            </React.Fragment>
        )
    }
     
}

export default React.memo(Child);



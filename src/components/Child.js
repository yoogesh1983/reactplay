import React, { useEffect } from 'react';


const Child = props => {

    useEffect(() => {
        console.log("Child is re-rendered.....");
    })

    return(
        <React.Fragment>
            <p>Squre of {props.number} is {Math.pow(props.number, 2)} </p>
        </React.Fragment>
    );
}

export default Child;



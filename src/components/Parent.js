import React, { useState, useEffect, useMemo } from 'react';
import Child from './Child'

const Parent = (props) => {

    const [current, setCurrent] = useState(0)

    useEffect(()=> {
        console.log("Parent is re-rendered.....");
    });

    const generateValue = e => {
        e.preventDefault();
        setCurrent(Math.floor(Math.random() * 3))
    }

    const memoizeChild = useMemo(()=> {
        return <Child number={current} />
    }, [current])

    return(
        <React.Fragment>
            <p>Current value: <strong>{current}</strong></p>
            <button onClick={generateValue}>Change value</button>
            {memoizeChild}
        </React.Fragment>
      );
}

export default Parent;

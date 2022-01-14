import React, {useState} from 'react';
import response from './response';
import Menu from './Menu';

const Yoogesh = () => {

  const [selectedOption, setSelectedOption] = useState('')
  const depth = 0;

  return (
          <>
            <h1>Folders {selectedOption}</h1>
            <Menu data= {response} selectedOption={selectedOption} onClick={next => setSelectedOption(next)} depth={depth}/>
          </>
  );
}

export default Yoogesh;



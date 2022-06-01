import React, {useState} from 'react';
import response from './response';
import Menu from './Menu';

const Yoogesh = () => {

  const [selectedFolders, setSelectedFolders] = useState({})

  return (
          <>
            <h1>Folder</h1>
            <Menu data= {response} selectedFolders={selectedFolders} onChange={next => setSelectedFolders({...selectedFolders, next})}/>
          </>
  );
}

export default Yoogesh;



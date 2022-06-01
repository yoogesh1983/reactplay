import React from "react";
import './common.css';

const Menu = ({ data, selectedFolders, depth=0, onChange }) => {

  const mainCheckboxClick = id => {
    if(selectedFolders[id]){
      delete selectedFolders[id];
    } else {
      selectedFolders[id] = {};
    }
    onChange(selectedFolders);
  }

  const subCheckboxClick = (id, subFolders) => {
    selectedFolders[id] = subFolders;
    onChange(selectedFolders);
  }

  // what to do
  return data.map((next) => (
    <>
      <div className="accordian">
          <input type="checkbox" style={{marginLeft: `${depth * 20}px`}} id={next.name} onClick={() => mainCheckboxClick(next.name)}/>
          <label for={next.name} style={{color: 'green', fontWeight: 'bold'}}>{next.name}</label>
      </div>

      {next.subFolder && next.subFolder.length > 0 && selectedFolders[next.name] &&
        <Menu data={next.subFolder}  selectedFolders={selectedFolders[next.name]} depth={depth + 1} onChange={subFolders => subCheckboxClick(next.name, subFolders)} />
      }
    </>
  ));
};

export default Menu; 

import React, {useEffect} from "react";
import './common.css';

const Menu = ({ data, selectedOption, onClick, depth}) => {

  const handleCheckboxClicked = (selectedOptionId) => {
    console.log(selectedOptionId, 'is clicked')
    onClick(selectedOptionId)
  };

  // Where to stop
  if (!data || !data.length) {
    return null;
  }

  // what to do
  return data.map((next) => (
    <>
      <div
        key={`${next.name}${depth}`}
        className="accordian"
        style={{marginLeft: `${depth * 20}px`, marginRight: `${depth * 20}px`}}
        onClick={() => handleCheckboxClicked(next.id)}
      >
        <span>{next.name}</span>
        <span>🔻</span>
      </div>

      <Menu data={next.subOptions} selectedOption={selectedOption} depth={depth + 1} onClick={() => handleCheckboxClicked(next.id)} />
    </>
  ));
};

export default Menu;

import React from "react";

const Option = ({ optionText, onClick }) => {
  return (
    <button className="option" onClick={() => onClick(optionText)}>
      {optionText}
    </button>
  );
};

export default Option;

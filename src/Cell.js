import React from "react";

function Cell(props) {
  const { value, onDivClicked } = props;
  return (
    <div className="board-cell" onClick={onDivClicked}>
      {value}
    </div>
  );
}

export default Cell;

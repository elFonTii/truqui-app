import React from "react";
import useGameHook from "../../hooks/useGame";

export default function Navigator() {
  const { handleEndGame } = useGameHook();
  return (
    <React.Fragment>
      <input type="checkbox" id="active"></input>
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <ul>
          <li>
            <a href="/" onClick={() => handleEndGame()}>
              Volver a comenzar
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

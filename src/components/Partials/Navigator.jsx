import React from "react";

export default function Navigator() {
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
            <a href="/">Volver a comenzar</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

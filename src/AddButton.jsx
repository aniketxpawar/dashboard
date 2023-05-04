import React, { useState } from "react";
import ReactDOM, { createRoot } from "react-dom";
import Form from "/src/Form";

function AddButton() {
  const root = createRoot(document.getElementById("display"));
  const [formDisplay, setFormDisplay] = useState(true);

  function handleClick() {
    formDisplay &&
      root.render(
        <Form setDisplay={setFormDisplay} isopen={{ display: "block" }} />
      );
  }
  return (
    <div className="add">
      <div id="add" className="add">
        <button
          id="add"
          className="button"
          style={{ backgroundColor: "#00ffca" }}
          onClick={handleClick}
        >
          <i className="fa fa-plus-square" aria-hidden="true"></i> Add
        </button>
        <button id="create" className="button" onClick={handleClick}>
          <i className="fa fa-pencil-square" aria-hidden="true"></i> Create
        </button>
      </div>

      <hr />
      <nav>
        <button className="btn text-left">
          <i className="fa fa-list-alt" aria-hidden="true"></i> All
        </button>
        <button className="btn text-left">
          <i className="fa fa-clock-o" aria-hidden="true"></i> Recent
        </button>
        <button className="btn text-left">
          <i className="fa fa-star-o" aria-hidden="true"></i> Starred
        </button>
      </nav>
      <hr />
      <nav className="demo">
        <button className="button text-left">
          <i className="fa fa-newspaper-o" aria-hidden="true"></i> Test Demo
        </button>
        <button className="button text-left">
          <i className="fa fa-newspaper-o" aria-hidden="true"></i> Page Builder
          Demo
        </button>
        <button className="button text-left">
          <i className="fa fa-newspaper-o" aria-hidden="true"></i> Metabase
        </button>
      </nav>
    </div>
  );
}

export default AddButton;

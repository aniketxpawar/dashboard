import React from "react";

function Card(props) {
  return (
    <div className="card">
      <button>
        <i className="fa fa-star-o" aria-hidden="true"></i>
      </button>
      <div>
        <h5>Dashboard</h5>
        <p>{props.group}</p>
      </div>
    </div>
  );
}

export default Card;

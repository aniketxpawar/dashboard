import React, { useCallback, useState } from "react";
import allCards from "/src/allCards";

function Form(props) {
  const [formOpen, setFormOpen] = useState(props.isopen);
  const [selectedValue, setSelectedValue] = useState({
    dashboard_type: "",
    dashboard_group: "",
    dashboard_name: "",
    dashboard_id: "",
    dashboard_role: ""
  });

  //const [allCards, setCards] = useState([]);
  function closeForm(e) {
    e.preventDefault();
    props.setDisplay({ display: false });
    setFormOpen({ display: "none" });
  }

  function onSave(e) {
    console.log(e);
    e.preventDefault();
    allCards.push(selectedValue);
    console.log(allCards);
    setFormOpen({ display: "none" });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSelectedValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    console.log(selectedValue);
  }

  if (formOpen) {
    return (
      <div style={formOpen} className="form-popup" id="myForm">
        <form action="" className="form-container">
          <div className="form-block">
            <label>Dashboard Type</label>
            <select
              onChange={handleChange}
              defaultValue="Select One"
              name="dashboard_type"
              id="dtype"
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="form-block">
            <label>Dashboard Group</label>
            <select
              onChange={handleChange}
              defaultValue="Select One"
              name="dashboard_group"
              id="dgroup"
            >
              <option value=""></option>
              <option value="Test Demo">Test Demo</option>
              <option value="Page Builder Demo">Page Builder Demo</option>
              <option value="Metabase">Metabase</option>
            </select>
          </div>

          <div className="form-block">
            <label>Dashboard Name</label>
            <select
              onChange={handleChange}
              defaultValue="Select One"
              name="dashboard_name"
              id="dname"
            >
              <option value=""></option>
              <option value="Dashboard 1">Dashboard 1</option>
              <option value="Dashboard 2">Dashboard 2</option>
              <option value="Dashboard 3">Dashboard 3</option>
              <option value="Dashboard 4">Dashboard 4</option>
            </select>
          </div>

          <div className="form-block">
            <label>Dashboard ID</label>
            <select
              onChange={handleChange}
              defaultValue="Select One"
              name="dashboard_id"
              id="did"
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="form-block">
            <label>Dashboard Role</label>
            <select
              onChange={handleChange}
              defaultValue="Select One"
              name="dashboard_role"
              id="drole"
            >
              <option value=""></option>
              <option value="admin">admin</option>
              <option value="user">user</option>
              <option value="systemadmin">systemadmin</option>
            </select>
          </div>

          <button onSubmit={onSave} className="save" type="submit">
            Save
          </button>
          <button type="submit" className="cancel" onSubmit={closeForm}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

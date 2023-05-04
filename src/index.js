import React, { useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import AddButton from "./AddButton";
import allCards from "./allCards";
import Card from "./Card";
import Cards from "./Cards";
import Form from "./Form";

const StarCards = [];

const root = createRoot(document.getElementById("display"));
const addroot = createRoot(document.getElementById("sidebar"));

addroot.render(<AddButton />);

allCards.map((cardItem, index) => (
  <Card key={index} group={cardItem.dashboard_group} />
));

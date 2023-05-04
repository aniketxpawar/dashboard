import React from "react";
import allCards from "/src/allCards";
import Card from "/src/Card";

function Cards() {
  return allCards.map((cardItem, index) => (
    <Card key={index} group={cardItem.dashboard_group} />
  ));
}

export default Cards;

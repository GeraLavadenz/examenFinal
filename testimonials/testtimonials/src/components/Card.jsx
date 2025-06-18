import React from "react";
import UserProfile from "./UserProfile";
import "./Card.css";

const Card = (props) => {
  const card=props.card;
  return (
    <section className={`card ${card.theme}`}>
      <UserProfile name={card.name} avatar={card.avatar} userState={card.userState}/>
      <p>
        {card.userDetails}
      </p>
      <p>
        {card.testimonial}
      </p>
    </section>
  );
};

export default Card;

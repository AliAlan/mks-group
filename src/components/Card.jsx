import React from "react";

const Card = ({ id, name, description }) => {
  return (
    <div className="border w-64 p-4 my-8">
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{description}</h1>
    </div>
  );
};

export default Card;

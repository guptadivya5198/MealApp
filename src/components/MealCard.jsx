import React from 'react';

const MealCard = ({ name, image }) => {
  return (
    <div className="flex">
      <p className="text-3xl font-bold underline">{name}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default MealCard;

import { useEffect, useState } from 'react';
import { fetchMeals } from '../api/meals.api';
import MealCard from './MealCard';

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchMeals(setMeals);
  }, []);
  return (
    <div>
      {meals.map((meal) => {
        return (
          <MealCard
            key={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
          />
        );
      })}
    </div>
  );
};
export default Meals;

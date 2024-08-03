import { useEffect, useState } from 'react';
import './App.css';
import { fetchDeatils } from './api/details.api';
import Meals from './components/Meals';

function App() {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetchDeatils(setCategories, setAreas);
  }, []);
  return (
    <>
      <div>
        <h1>Categories</h1>
        <div className="items">
          {categories.map((category, index) => {
            return <div key={index}>{category.strCategory}</div>;
          })}
        </div>
      </div>
      <div>
        <h1>Areas</h1>
        <div className="items">
          {areas.map((area, index) => {
            return <div key={index}>{area.strArea}</div>;
          })}
        </div>
      </div>
      {/* <div>
        <h1>Ingredients</h1>
      </div> */}
      <Meals />
    </>
  );
}

export default App;

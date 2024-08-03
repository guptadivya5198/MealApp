export const fetchDeatils = async (setCategories, setArea) => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
  );
  const response2 = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
  );

  const data2 = await response2.json();
  setArea(data2.meals);

  const data = await response.json();
  setCategories(data.meals);
};

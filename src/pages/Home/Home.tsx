import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "../../components/Category/Category";
import { Link } from "react-router-dom";

type MealsCategory = {
  meals: {
    strCategory: string;
  }[];
};

const Home = () => {
  const [categories, setCategories] = useState<MealsCategory | null>(null);

  useEffect(() => {
    const fetchMealCategories = async () => {
      try {
        const { data } = await axios.get(
          "https://themealdb.com/api/json/v1/1/list.php?c=list"
        );
        setCategories(data);
      } catch (error) {
        console.error("Error fetching meal categories:", error);
      }
    };

    fetchMealCategories();
  }, []);

  return (
    <div>
      <h1>Meal Categories</h1>
      {categories ? (
        <ul>
          {categories.meals.map((meal, index) => (
            <Link key={index} to={`/categories/${meal.strCategory}`}>
                <Category category={meal.strCategory} />
            </Link>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;

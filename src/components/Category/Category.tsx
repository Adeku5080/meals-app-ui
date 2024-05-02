import React from "react";

type CategoryProps = {
  category: string;
};
const Category = ({ category }: CategoryProps) => {
  console.log(category, "category");
  return <div>{category}</div>;
};

export default Category;

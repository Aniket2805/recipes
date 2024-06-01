"use client";

import { useParams } from "next/navigation";
import recipeData from "@/data/recipe_data.json";
import Card from "@/components/Card";
const Page = () => {
  const { slug } = useParams();
  const recipe = [];
  recipeData.recipes.map((item) => {
    if (item.name.toLowerCase().includes(slug)) {
      recipe.push(item);
    }
  });
  return (
    <div className="my-10 pt-16 sm:pt-20 px-8 sm:px-16 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
        {recipe.map((recipe, index) => (
          <Card key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Page;

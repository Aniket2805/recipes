"use client";
import recipeData from "@/data/recipe_data.json";
import Card from "@/components/Card";
const page = () => {
  return (
    <div className="my-10 pt-20 px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
        {recipeData.recipes.map((recipe, index) => (
          <Card key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default page;

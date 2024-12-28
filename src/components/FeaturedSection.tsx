"use client";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Recipe } from "@/data/type";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
const FeaturedSection = () => {
  const [recipes, setrecipes] = useState<Recipe[]>([]);
  const getRecipes = async () => {
    const fetchedRecipes: Recipe[] = [];
    while (fetchedRecipes.length < 8) {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      const meal = data.meals[0];
      if (!fetchedRecipes.some((r) => r.idMeal === meal.idMeal)) {
        fetchedRecipes.push(meal);
      }
    }
    setrecipes(fetchedRecipes);
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div className="pb-12 bg-black">
      <div>
        <h1 className="text-gray-300 text-center text-xl sm:text-2xl mb-2 font-semibold">
          Featured Recipes
        </h1>
        <p className="text-center text-3xl sm:text-5xl font-extrabold text-indigo-500">
          Learn best recipes
        </p>
      </div>
      <div className="my-10 px-8 sm:px-16 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
          {recipes.map((recipe) => (
            <Card key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={"/recipes"}>
          <Button className="bg-zinc-800 border-2 border-cyan-400 text-white">
            View All Recipes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;

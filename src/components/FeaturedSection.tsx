"use client";
import Link from "next/link";
import recipeData from "../data/recipe_data.json";
import { Button } from "./ui/moving-border";
import Card from "@/components/Card";
const FeaturedSection = () => {
  return (
    <div className="pb-12 bg-black">
      <div>
        <h1 className="text-gray-300 text-center text-2xl mb-2 font-semibold">
          Featured Recipes
        </h1>
        <p className="text-center text-5xl font-extrabold text-indigo-500">
          Learn best recipes
        </p>
      </div>
      <div className="my-10 px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {recipeData.recipes.slice(0, 6).map((recipe, index) => (
            <Card key={index} recipe={recipe} />
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

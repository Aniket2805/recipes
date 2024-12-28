'use client';
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
const Page = () => {
  const { slug } = useParams();
  const [recipes, setrecipes] = useState<any[]>([]);
    useEffect(() => {
      console.log(slug);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setrecipes(data.meals);
      });
  }, [slug]);
  return (
    <div className="my-10 pt-16 sm:pt-20 px-8 sm:px-16 lg:px-24">
      <div>
        <h1 className="text-yellow-400 text-center text-4xl font-semibold font-mono mb-8">
          Search results for '{slug}'
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {recipes?.map((recipe) => (
          <Card key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Page;

'use client';

import { useParams } from "next/navigation";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
const Page = () => {
  const { slug } = useParams();
  const [recipes, setrecipes] = useState();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setrecipes(data.meals);
      });
  }, [slug]);
  return (
    <div className="my-10 pt-16 sm:pt-20 px-8 sm:px-16 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {recipes?.map((recipe, index) => (
          <Card key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Page;

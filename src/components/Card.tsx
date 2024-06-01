"use client";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import Link from "next/link";

const Card = (props: {
  recipe: {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    mealType: string[];
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
  };
}) => {
  const { recipe } = props;
  return (
    <div className="cursor-pointer">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-zinc-900">
        <Image
          src={recipe.image}
          alt=""
          width={300}
          height={200}
          className="object-contain rounded-[22px] w-full"
        />
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-white text-xl font-semibold">{recipe.name}</h2>
          <div className="flex items-center justify-center">
            <span className="text-white text-lg font-semibold mr-1">
              {recipe.rating}
            </span>
            <MdStarRate className="text-yellow-400 text-2xl" />
          </div>
        </div>
        <div className="flex mt-2 items-center mb-2">
          <FaTags className="text-white text-lg mr-2" />
          <span className="text-white text-base font-semibold">Tags</span>
        </div>
        <div className="mb-2">
          {recipe.tags.map((tag, index) => (
            <span
              key={index}
              className="text-white text-sm bg-zinc-800 px-2 py-1 rounded-md mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <Link href={`/recipes/${recipe.name}`}>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-zinc-800 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View Recipe
              </div>
            </button>
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default Card;

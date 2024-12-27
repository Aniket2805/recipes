'use client';
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { MdOutlineFavorite, MdStarRate } from "react-icons/md";
import Link from "next/link";
import { useAppDispatch } from "@/lib/store/hooks/hooks";
import { add } from "@/lib/store/features/favourite/favoutriteSlice";
import { Recipe } from "@/data/type";

const Card = (props: { recipe: Recipe }) => {
  const { recipe } = props;
  const dispatch = useAppDispatch();
  const handleFavourite = (id: string) => {
    dispatch(add(id));
    console.log("Favourite", id);
  };
  return (
    <div className="cursor-pointer">
      <BackgroundGradient className="rounded-[22px] p-2 sm:p-4 bg-zinc-900">
        <Image
          src={recipe.strMealThumb}
          alt=""
          width={300}
          height={200}
          className="object-contain rounded-[22px] w-full"
        />
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-white text-lg font-semibold truncate">
            {recipe.strMeal}
          </h2>
          <div className="flex items-center justify-center">
            <span className="text-white text-lg font-semibold mx-1">
              {(Math.random() * (5 - 4.2) + 4.2).toFixed(1)}
            </span>
            <MdStarRate className="text-yellow-400 text-2xl" />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Link href={`/recipes/${recipe.idMeal}`}>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-6 py-2  bg-zinc-800 rounded-[6px] text-sm  relative group transition duration-200 text-white hover:bg-transparent">
                View Recipe
              </div>
            </button>
          </Link>
          <button
            className="p-[3px] relative"
            onClick={() => {
              handleFavourite(recipe.idMeal);
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            <div className="px-2 py-2 rounded-full bg-zinc-800  relative group transition duration-200 text-white hover:bg-white hover:text-red-700">
              <MdOutlineFavorite className="text-xl" />
            </div>
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default Card;

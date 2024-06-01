"use client";

import { useParams } from "next/navigation";
import recipeData from "@/data/recipe_data.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TbBulbFilled } from "react-icons/tb";
import { LuAlarmClock } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import Image from "next/image";
import { FaTags } from "react-icons/fa";
const Page = () => {
  const { slug } = useParams();
  const decodedSlug = decodeURIComponent(slug);
  const recipe = recipeData.recipes.find(
    (recipe) => recipe.name === decodedSlug
  );
  console.log(recipe);
  return (
    <div>
      <div className="text-white">
        <div className="relative">
          <div className="relative md:fixed w-full md:w-5/12 min-h-screen inset-0 flex justify-center items-center">
            <CardContainer className="inter-var p-10">
              <CardBody className="relative group/card  hover:shadow-2xl shadow-xl shadow-white/[0.3] hover:shadow-white/[0.8] border-white/[0.2] w-auto h-auto rounded-2xl p-6 border-2 bg-zinc-950">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={recipe.image}
                    height={400}
                    width={400}
                    className="rounded-2xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                    priority="true"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full md:w-7/12 ml-auto">
            <div className="px-10 md:py-24 my-10 md:my-16">
              <h2 className="text-6xl mb-8 text-indigo-500 font-bold">
                {recipe.name}
              </h2>
              <div className="mb-4">
                <div className="flex items-center mb-2 text-2xl">
                  <FaClipboardList className="text-yellow-300 mr-2 text-2xl" />
                  <span className="text-yellow-300 font-semibold">
                    Ingredients:
                  </span>
                </div>
                <ul className="text-slate-300 text-lg list-disc px-8">
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-2 text-2xl">
                  <TbBulbFilled className="text-yellow-300 mr-2 text-3xl" />
                  <span className="text-yellow-300 font-semibold">
                    Instructions
                  </span>
                </div>
                <ul className="text-slate-300 text-lg list-disc px-8">
                  {recipe.instructions.map((instruction) => (
                    <li key={instruction}>{instruction}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-2 text-2xl">
                  <LuAlarmClock className="text-yellow-300 text-2xl mr-2" />
                  <span className="text-yellow-300 font-semibold">
                    Total Time
                  </span>
                </div>
                <ul className="text-slate-300 text-lg list-disc px-8">
                  <li>
                    {recipe.prepTimeMinutes +
                      recipe.cookTimeMinutes +
                      " minutes"}
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-2 text-2xl">
                  <FaTags className="text-yellow-300 text-2xl mr-2" />
                  <span className="text-yellow-300 font-semibold">Tags</span>
                </div>
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-white text-sm bg-zinc-800 px-2 py-1 rounded-md mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <BackgroundBeams /> */}
      </div>
    </div>
  );
};

export default Page;

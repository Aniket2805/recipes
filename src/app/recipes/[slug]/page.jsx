'use client';
import { useParams } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TbBulbFilled } from "react-icons/tb";
import { FaClipboardList } from "react-icons/fa";
import Image from "next/image";
import { ImYoutube2 } from "react-icons/im";
import { FaTags } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { useEffect, useState } from "react";
const Page = () => {
  const { slug } = useParams();
  const [recipe, setrecipes] = useState();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setrecipes(data.meals[0]);
      });
  }, [slug]);
  return (
    recipe && (
      <div>
        <div className="text-white">
          <div className="md:flex justify-center">
            <div className="w-full md:w-6/12">
              <CardContainer className="inter-var p-6 sm:p-10">
                <CardBody className="relative group/card  hover:shadow-2xl shadow-xl shadow-white/[0.3] hover:shadow-white/[0.8] border-white/[0.2] w-auto h-auto rounded-2xl p-6 border-2 bg-zinc-950">
                  <CardItem translateZ="100" className="">
                    <Image
                      src={recipe?.strMealThumb}
                      height={400}
                      width={400}
                      className="rounded-2xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      priority="true"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
              <div className="flex justify-center mt-4">
                <a
                  href={recipe.strYoutube}
                  target="_blank"
                  className="bg-white text-zinc-900 px-4 py-1 rounded-md flex items-center"
                >
                  <span className="text-sm">Watch on</span>
                  <ImYoutube2 className="text-red-500 text-[42px] ml-2" />
                </a>
                <a
                  href={recipe.strSource}
                  target="_blank"
                  className="bg-yellow-300 text-zinc-900 px-4 py-1 rounded-md ml-4 flex items-center"
                >
                  <HiExternalLink className="text-zinc-900 text-xl mr-2" />
                  Source
                </a>
              </div>
              <div className="mt-4">
                {recipe.strTags && (
                  <div className="flex justify-center">
                    <div className="flex items-center mb-2 text-sm sm:text-base mt-4">
                      <FaTags className="text-yellow-300 mr-2 text-lg" />
                      <span className="text-yellow-300 font-semibold">
                        Tags:{" "}
                        {recipe.strTags.split(",").map((tag) => (
                          <span className="bg-zinc-800 text-white rounded-md px-2 py-1 mr-2" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex justify-center">
                  <div className="flex items-center mb-2 text-sm sm:text-base mt-4">
                    <BiCategory className="text-yellow-300 mr-2 text-lg" />
                    <span className="text-yellow-300 font-semibold">
                      Category: {recipe.strCategory}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center mb-2 text-sm sm:text-base mt-4">
                  <FaLocationDot className="text-yellow-300 mr-2 text-base" />
                  <span className="text-yellow-300 font-semibold">
                    Area: {recipe.strArea}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-7/12 ml-auto">
              <div className="p-6 sm:px-10 md:pt-24 my-10 md:my-16">
                <h2 className="text-2xl md:text-4xl lg:text-6xl mb-8 text-indigo-500 font-bold">
                  {recipe.strMeal}
                </h2>
                <div className="mb-4">
                  <div className="flex items-center mb-2 text-lg sm:text-2xl">
                    <FaClipboardList className="text-yellow-300 mr-2 text-2xl" />
                    <span className="text-yellow-300 font-semibold">
                      Ingredients:
                    </span>
                  </div>
                  <ul className="text-slate-300 sm:text-lg list-disc px-8">
                    {Object.keys(recipe)
                      .filter((key) => key.includes("strIngredient"))
                      .map((key) => {
                        const ingredient = recipe[key];
                        const measure =
                          recipe[key.replace("Ingredient", "Measure")];
                        return ingredient && measure ? (
                          <li key={key}>
                            {ingredient} - {measure}
                          </li>
                        ) : null;
                      })}
                  </ul>
                </div>
                {/* <div className="mb-4">
                <div className="flex items-center mb-2 text-lg sm:text-2xl">
                  <FaClipboardList className="text-yellow-300 mr-2 text-2xl" />
                  <span className="text-yellow-300 font-semibold">
                    Ingredients:
                  </span>
                </div>
                <ul className="text-slate-300 sm:text-lg list-disc px-8">
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div> */}
                <div className="mb-4">
                  <div className="flex items-center mb-2 text-lg sm:text-2xl">
                    <TbBulbFilled className="text-yellow-300 mr-2 text-3xl" />
                    <span className="text-yellow-300 font-semibold">
                      Instructions
                    </span>
                  </div>
                  <ul className="text-slate-300 sm:text-lg list-disc px-8">
                    {recipe.strInstructions
                      .split(".")
                      .filter((instruction) => instruction.trim() !== "") // Filter out empty strings
                      .map((instruction, index) => (
                        <li key={index}>{instruction.trim()}</li> // Trim and render each instruction
                      ))}
                  </ul>
                </div>
                {/* <div className="mb-4">
                <div className="flex items-center mb-2 text-lg sm:text-2xl">
                  <LuAlarmClock className="text-yellow-300 text-2xl mr-2" />
                  <span className="text-yellow-300 font-semibold">
                    Total Time
                  </span>
                </div>
                <ul className="text-slate-300 sm:text-lg list-disc px-8">
                  <li>
                    {recipe.prepTimeMinutes +
                      recipe.cookTimeMinutes +
                      " minutes"}
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-2 text-lg sm:text-2xl">
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
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Page;

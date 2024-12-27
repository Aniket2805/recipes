'use client';
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Recipe from "../img/recipe.png";
export function WhyChooseUs() {
  return (
    <div className="p-8 sm:p-10">
      <div className="text-gray-300 text-center text-xl sm:text-3xl mb-3 font-semibold">
        Why Choose Us
      </div>
      <p className="text-center text-2xl sm:text-5xl font-extrabold text-indigo-500">
        Discover global flavors with expert Recipes.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-10">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Curated Recipes from Around the World
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Discover an extensive collection of recipes, handpicked by
              culinary experts, to bring diverse flavors from every corner of
              the globe right to your kitchen.
            </p>
          </div>
          <Image
            src={Recipe}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 md:lg:-right-[40%] lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Step-by-Step Guidance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Our easy-to-follow instructions and detailed video tutorials ensure
            that even beginners can create delicious dishes with confidence.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Customizable Meal Plans
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Create personalized meal plans tailored to your dietary
              preferences and nutritional needs, making healthy eating easy and
              enjoyable.
            </p>
          </div>
          <Image
            src={Recipe}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[20%] lg:-right-[10%] -bottom-8 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { GiCook } from "react-icons/gi";
import Image from "next/image";
import chef from "../img/chef.png";
import Cooking from "../img/Cooking.png";
import Link from "next/link";
import { Button } from "./ui/moving-border";
export default function SparklesPreview() {
  return (
    <div className="sm:h-[100vh] mt-20 py-16 sm:my-0 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20 flex items-center">
        Best<span className="text-indigo-500 ml-4 sm:ml-8">Recipes!</span>
        <GiCook className="text-yellow-300" />
      </h1>
      <p className="text-xs sm:text-sm md:text-lg lg:text-2xl text-center text-white relative z-20 mt-4">
        Discover the best cooking recipes from around the world!
      </p>
      <div className="w-[60rem] bg-black h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div>
        <Image
          alt=""
          loading="eager"
          src={Cooking}
          width={"300"}
          height={"300"}
          className="z-999 hidden sm:flex sm:absolute left-0 lg:left-[100px] top-1/2"
        />
        <Image
          alt=""
          src={chef}
          width={"300"}
          height={"300"}
          className="z-999 hidden sm:flex sm:absolute right-[0px] lg:right-[100px] top-1/2"
        />
        <div>
          <Link href={"/recipes"}>
            <Button
              borderRadius="1.75rem"
              className="bg-black border-cyan-500 border-2"
            >
              Explore Recipes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { categoriesData } from "@/data/categories_data";
import { ProductItem } from "@/components/ui/navbar-menu";
const Page = () => {
  return (
    <div className="p-10 md:py-20 w-full flex flex-col justify-center">
      <div className="mt-10 mb-4">
        <h1 className="text-yellow-400 text-center text-4xl font-semibold font-mono">
          Categories
        </h1>
      </div>
      <div className="text-sm grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4">
        {categoriesData.map((category) => (
          <ProductItem
            key={category.idCategory}
            title={category.title}
            description={category.description}
            href={"/category" + category.href}
            src={category.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

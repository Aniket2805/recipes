"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";
import { categoriesData } from "@/data/categories_data";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 rounded-full shadow-[4px_20px_60px_-15px_rgba(255,255,255,0.8)]" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const placeholders = [
    "Chicken Recipes",
    "Pizza Recipes",
    "Pasta Recipes",
    "Biryani Recipes",
    "Cake Recipes",
  ];
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Search">
          <PlaceholdersAndVanishInput
            onSubmit={onSubmit}
            onChange={handleChange}
            placeholders={placeholders}
          />
        </MenuItem>
        <Link href={"/category"} className="lg:hidden">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Categories"
          ></MenuItem>
        </Link>
        <div className="lg:grid hidden">
          <MenuItem setActive={setActive} active={active} item="Categories">
            <div className="text-sm grid sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
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
          </MenuItem>
        </div>
        <Link href={"/about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

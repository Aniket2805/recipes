"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 rounded-full shadow-[4px_20px_60px_-15px_rgba(255,255,255,0.8)]" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
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
        <MenuItem setActive={setActive} active={active} item="Recipies">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/recipes">All Recipes</HoveredLink>
            <HoveredLink href="/interface-design">Pizza Recipe</HoveredLink>
            <HoveredLink href="/seo">Noodles Recipes</HoveredLink>
            <HoveredLink href="/branding">Pasta Recipes</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Us"
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

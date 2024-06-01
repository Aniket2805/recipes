"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 lg:px-8 sticky z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            minus quisquam doloribus. Reiciendis aut ex nihil velit praesentium
            laboriosam magni labore necessitatibus.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="/">Home</a>
            </li>
            <li className="mb-2">
              <a href="/recipes">Recipes</a>
            </li>
            <li className="mb-2">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-3 justify-center">
            <a
              href="#"
              target="_blank"
              className="rounded-[100%] transition duration-200 hover:bg-gray-900 p-3 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              className="rounded-[100%] transition duration-200 hover:bg-gray-900 p-3 text-xl"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              className="rounded-[100%] transition duration-200 hover:bg-gray-900 p-3 text-xl"
            >
              <BiLogoInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              className="rounded-[100%] transition duration-200 hover:bg-gray-900 p-3 text-xl"
            >
              <IoLogoYoutube />
            </a>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <ul>
            <li className="mb-2">New Delhi, India-110059</li>
            <li className="mb-2">Email: help@recipeshub.com</li>
            <li className="mb-2">Phone: 8800139664</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { slug } = useParams();
  return <div className="text-white">{slug}</div>;
};

export default page;

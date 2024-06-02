"use client";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/utils/cn";
const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  return (
    <div className="text-white pt-20 sm:pt-24 mt-12 px-6 sm:px-10 lg:px-24">
      <h1 className="text-xl sm:text-3xl font-bold mb-2 text-center">
        Contact Us
      </h1>
      <p className="text-2xl sm:text-5xl text-indigo-500 font-bold text-center">
        Feel free to contact us
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 h-full mt-6 sm:mt-8 md:mt-0">
        <div className="flex justify-center items-center">
          <div className="sm:text-xl">
            <div className="flex items-center mb-6">
              <span className="p-3 sm:p-5 bg-slate-900 text-2xl sm:text-3xl rounded-full mr-4">
                <FaMapLocationDot className="text-white" />
              </span>
              <p>O-49, Back Side Chanakya Place-2, New Delhi-110059</p>
            </div>
            <div className="flex items-center mb-6">
              <span className="p-3 sm:p-5 bg-slate-900 text-2xl sm:text-3xl rounded-full mr-4">
                <FiPhoneCall className="text-white" />
              </span>
              <p>+91 8800139664</p>
            </div>
            <div className="flex items-center mb-6">
              <span className="p-3 sm:p-5 bg-slate-900 text-2xl sm:text-3xl rounded-full mr-4">
                <IoMail className="text-white" />
              </span>
              <p>aniketkumar2025it@gmail.com</p>
            </div>
            <div className="flex items-center">
              <span className="p-3 sm:p-5 bg-slate-900 text-2xl sm:text-3xl rounded-full mr-4">
                <FaClock className="text-white" />
              </span>
              <p>Monday to Saturday: 9:00AM to 5:00PM</p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="max-w-md w-full mx-auto rounded-2xl p-6 sm:p-8 shadow-input bg-white">
            <h2 className="font-bold text-xl text-neutral-800">
              Send us a message
            </h2>
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input
                    id="firstname"
                    placeholder="Tyler"
                    type="text"
                    required
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input
                    id="lastname"
                    placeholder="Durden"
                    type="text"
                    required
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="twitterpassword">Message</Label>
                <Input
                  id="twitterpassword"
                  placeholder="Your Message"
                  type="twitterpassword"
                  required
                />
              </LabelInputContainer>
              <button
                className="bg-gradient-to-br relative group/btn from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                type="submit"
                onClick={() =>
                  toast("From Submitted", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Remove",
                      onClick: () => console.log("Undo"),
                    },
                  })
                }
              >
                Send &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

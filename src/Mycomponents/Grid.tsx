"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Choose Healthy</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We believe that  everyone should have access to  healthy food.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Choose Sustainability</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We believe that Sustainability is not just an option but a lifestyle.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Choose Humanity</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We believe in maintaining a positive work environment, and that every child deserves a childhood and not a cruel job.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Choose Wisely</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We believe in picking what's best for you and your soul.
      </p>
    </div>
  );
};

const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2 row-span-10 max-h-5xl max-w-6xl",
      thumbnail:
        "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?cs=srgb&dl=pexels-jane-doan-1128678.jpg&fm=jpg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1 row-span-10 max-h-38xl",
      thumbnail:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1 row-span-10 max-h-38xl",
      thumbnail:
        "https://www.traliant.com/wp-content/uploads/2021/03/2021-03-04-4-Ways-Managers-Can-Build-a-Positive-Work-Environment.jpg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2 row-span-10 max-h-38xl",
      thumbnail:
        "https://www.visitamishcountry.com/sites/default/files/styles/hero_image/public/images/clothing-fashion-hero.jpg?itok=ufszydVI",
    },
  ];
  
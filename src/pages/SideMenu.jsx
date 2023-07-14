import React, { useEffect, useState } from "react";

export const SideMenu = ({ active, setActive, items }) => {
  return (
    <div
      className={
        "fixed z-10 right-0 top-0 h-full w-full flex justify-end transition-all duration-300 ease-in-out" +
        (active ? "" : " translate-x-1/3")
      }
    >
      <div
        onClick={() => setActive(!active)}
        className={
          "w-2/3 h-full transition delay-200" +
          (active ? " backdrop-blur-[3px]" : " invisible")
        }
      ></div>
      <div className="flex w-1/3 h-full bg-white"></div>
    </div>
  );
};

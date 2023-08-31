import React, { useEffect, useState } from "react";
import { SideMenuItem } from "./SideMenuItem";

export const SideMenu = ({ active, setActive, items }) => {
  return (
    <div
      className={
        "fixed z-10 right-0 top-0 h-full w-full flex justify-end transition-all duration-300 ease-in-out" +
        (active ? " " : " translate-x-1/3 invisible")
      }
    >
      <div
        onClick={() => setActive(!active)}
        className={
          "w-2/3 h-full" +
          (active ? " bg-gray-700 opacity-20 delay-[250ms]" : " invisible")
        }
      ></div>
      <div className="flex flex-col items-center w-1/3 min-w-[400px] h-full pt-6 bg-white">
        <h3 className="text-4xl">Lists to do</h3>
        <ul className="w-full mt-8 px-10 text-xl overflow-auto">
          {items.map((item) => {
            return <SideMenuItem key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { SideMenuItem } from "./SideMenuItem";
import { BsClipboard2Plus } from "react-icons/bs";

export const SideMenu = ({
  active,
  setActive,
  items,
  addNewList,
  currentList,
  setCurrentList,
}) => {
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
        <ul className="w-full my-8 px-10 text-xl overflow-auto">
          {items.map((item) => {
            return (
              <SideMenuItem
                key={item.id}
                item={item}
                setActive={setActive}
                active={active}
                currentList={currentList}
                setCurrentList={setCurrentList}
              />
            );
          })}
          <li
            onClick={() => {
              addNewList();
              setActive(!active);
            }}
            className="h-24 p-4 mb-3 flex justify-center text-3xl items-center rounded-lg bg-gray-200 
            hover:cursor-pointer hover:bg-gray-300 hover:text-4xl ease-in-out duration-300"
          >
            <BsClipboard2Plus />
          </li>
        </ul>
      </div>
    </div>
  );
};

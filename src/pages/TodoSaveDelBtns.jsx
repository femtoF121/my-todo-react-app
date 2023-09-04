import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

export const TodoSaveDelBtns = ({ del, save }) => {
  return (
    <div className="h-12 flex justify-end align-middle text-2xl mt-4">
      <button
        onClick={() => del()}
        className="ml-4 flex justify-end items-center border-2 rounded-full border-red-500 
      bg-red-300 px-5 hover:bg-red-400 transition-colors duration-300 ease-in-out"
      >
        <span>Delete list</span>
        <AiOutlineDelete className="text-3xl ml-3" />
      </button>
    </div>
  );
};

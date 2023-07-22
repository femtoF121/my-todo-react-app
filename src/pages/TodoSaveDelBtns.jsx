import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";

export const TodoSaveDelBtns = ({ add, del, save }) => {
  return (
    <div className="h-12 flex justify-end align-middle text-2xl mt-4">
      <button
        onClick={save}
        className="ml-4 flex justify-end items-center border-2 rounded-full border-green-500 
      bg-green-300 px-5 hover:bg-green-400 transition-colors duration-300 ease-in-out"
      >
        <span>Save todo</span>
        <AiOutlineSave className="text-3xl ml-3" />
      </button>
      <button
        onClick={del}
        className="ml-4 flex justify-end items-center border-2 rounded-full border-red-500 
      bg-red-300 px-5 hover:bg-red-400 transition-colors duration-300 ease-in-out"
      >
        <span>Delete todo</span>
        <AiOutlineDelete className="text-3xl ml-3" />
      </button>
    </div>
  );
};

import React from "react";

export const BurgerMenuButton = ({ menuActive, setMenuActive }) => {
  return (
    <button
      onClick={() => setMenuActive(!menuActive)}
      className="mt-7 mr-7 h-8 w-10 fixed right-0 top-0 z-20
        before:bg-gray-700 before:h-1 before:w-10 before:absolute before:top-0 before:left-0 before:rounded-full
        after:bg-gray-700 after:h-1 after:w-10 after:absolute after:bottom-0 after:left-0 after:rounded-full"
    >
      <div className="h-1 w-full bg-gray-700 rounded-full" />
    </button>
  );
};

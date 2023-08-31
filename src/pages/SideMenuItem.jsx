import React from "react";

export const SideMenuItem = ({ item }) => {
  let doneTodos = 0;
  for (let i = 0; i < item.todos.length; i++)
    if (item.todos[i].completed) doneTodos++;
  return (
    <li className="h-24 p-4 mb-3 flex flex-col rounded-md bg-gray-200">
      <div className="h-2/3 pl-2 font-semibold">{item.title}</div>
      <div className="flex-1 flex">
        <div className="w-1/2">All to do: {item.todos.length}</div>
        <div className="w-1/2">Done: {doneTodos}</div>
      </div>
    </li>
  );
};

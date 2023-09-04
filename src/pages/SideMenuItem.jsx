import React from "react";

export const SideMenuItem = ({
  item,
  setActive,
  active,
  currentList,
  setCurrentList,
}) => {
  let doneTodos = 0;
  for (let i = 0; i < item.todos.length; i++)
    if (item.todos[i].completed) doneTodos++;
  return (
    <li
      onClick={() => {
        setActive(!active);
        setCurrentList(item);
      }}
      className={
        "h-24 py-4 px-6 mb-3 flex flex-col rounded-lg hover:cursor-pointer ease-in-out duration-300" +
        (currentList.id == item.id
          ? " bg-blue-200 hover:bg-blue-300"
          : " bg-gray-200 hover:bg-gray-300")
      }
    >
      <div className="h-2/3 font-semibold">{item.title}</div>
      <div className="flex-1 flex text-base">
        <div className="w-1/2">All to do: {item.todos.length}</div>
        <div className="w-1/2">Done: {doneTodos}</div>
      </div>
    </li>
  );
};

import { useState } from "react";

export function TodoAddItemForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-32"
    >
      <div className="relative z-0">
        <input
          type="text"
          id="item"
          className="block pt-4 pb-0.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
          placeholder=" "
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <label
          htmlFor="item"
          className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          New item
        </label>
      </div>
      <button className="border-2 border-blue-400 hover:bg-blue-300 rounded-full bg-blue-200 h-12">
        Add new item
      </button>
    </form>
  );
}

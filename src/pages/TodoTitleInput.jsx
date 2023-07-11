import React, { useState } from "react";

export default function TodoTitleInput() {
  const [title, setTitle] = useState("");

  return (
    <form className="flex flex-col justify-between text-5xl mt-2 mb-8 px-10">
      <div className="relative z-0">
        <input
          type="text"
          id="item"
          className="block pt-4 pb-0.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
          placeholder=" "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label
          htmlFor="item"
          className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-12 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-12"
        >
          Todo title
        </label>
      </div>
    </form>
  );
}

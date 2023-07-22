import { FiDelete } from "react-icons/fi";

export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-stretch flex-row-reverse justify-between rounded-md overflow-hidden">
      <button
        onClick={() => deleteTodo(id)}
        className="pr-3 text-red-500 hover:bg-red-100 peer"
      >
        <FiDelete />
      </button>
      <label className="p-2 pl-3 peer-hover:bg-red-100 w-full">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          className="mr-2 w-4 h-4 rounded-full peer"
        />
        <p className="inline peer-checked:line-through peer-checked:text-gray-500">
          {title}
        </p>
      </label>
    </li>
  );
}

import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-5">Things to do:</h1>
      <ul>
        {todos.length === 0 && "No todos"}
        {todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              key={todo.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

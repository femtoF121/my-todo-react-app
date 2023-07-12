import React, { useEffect, useState } from "react";
import { TodoAddItemForm } from "./TodoAddItemForm";
import { TodoTitleInput } from "./TodoTitleInput";
import { TodoList } from "./TodoList";

export function TodoApp() {
  const [todoList, setTodoList] = useState(() => {
    const localValueList = localStorage.getItem("LISTS");
    if (localValueList == null)
      return { id: crypto.randomUUID(), title: "", todos: [] };
    return JSON.parse(localValueList);
  });
  const [todos, setTodos] = useState(todoList.todos);

  useEffect(() => {
    changeTodoList();
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("LISTS", JSON.stringify(todoList));
  }, [todoList]);

  function changeTodoList(title = todoList.title) {
    setTodoList({ ...todoList, title: title, todos: todos });
  }

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        }

        return todo;
      });
    });
  }

  return (
    <>
      <TodoTitleInput onChange={changeTodoList} listTitle={todoList.title} />
      <div className="w-full rounded-3xl p-10 bg-gray-50 text-2xl">
        <TodoAddItemForm onSubmit={addTodo} />
        <hr className="mt-12 mb-8 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

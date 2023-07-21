import React, { useEffect, useState } from "react";
import { TodoAddItemForm } from "./TodoAddItemForm";
import { TodoTitleInput } from "./TodoTitleInput";
import { TodoList } from "./TodoList";
import { TodoSaveDelBtns } from "./TodoSaveDelBtns";

export function TodoApp() {
  const [todoLists, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("LISTS");
    if (localValue == null)
      return [{ id: crypto.randomUUID(), title: "", todos: [] }];
    return JSON.parse(localValue);
  });
  const [lastTodoId, setLastTodoId] = useState(() => {
    const localValue = localStorage.getItem("LASTTODOID");
    if (localValue == null) return false;
    return JSON.parse(localValue);
  });
  const [currentList, setCurrentTodo] = useState(() => {
    for (let i = 0; i < todoLists.length; i++) {
      if (todoLists[i].id == lastTodoId) return todoLists[i];
    }
  });
  const [todos, setTodos] = useState(currentList.todos);

  useEffect(() => {
    changeTodoList();
  }, [todos]);

  function saveListChanges() {
    let toSave = [];
    for (let i = 0; i < todoLists.length; i++) {
      if (todoLists[i].id == currentList.id) toSave.push(currentList);
      toSave.push(todoLists[i]);
    }
    localStorage.setItem("LISTS", JSON.stringify(toSave));
  }

  function changeTodoList(title = currentList.title) {
    setCurrentTodo({ ...currentList, title: title, todos: todos });
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
      <div className="px-10 mb-4">
        <TodoTitleInput
          onChange={changeTodoList}
          listTitle={currentList.title}
        />
        <TodoSaveDelBtns
          todoList={currentList}
          todoLists={todoLists}
          save={saveListChanges}
        />
      </div>
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

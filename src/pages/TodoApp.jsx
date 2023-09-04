import React, { useEffect, useState } from "react";
import { TodoAddItemForm } from "./TodoAddItemForm";
import { TodoTitleInput } from "./TodoTitleInput";
import { TodoList } from "./TodoList";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { SideMenu } from "./SideMenu";
import { TodoSaveDelBtns } from "./TodoSaveDelBtns";

export function TodoApp() {
  const [menuActive, setMenuActive] = useState(false);
  const [todoLists, setTodoLists] = useState(() => {
    const localValue = localStorage.getItem("LISTS");
    if (localValue == null)
      return [{ id: crypto.randomUUID(), title: "", todos: [] }];
    return JSON.parse(localValue);
  });
  const [currentList, setCurrentTodo] = useState(() => todoLists[0]);
  const [todos, setTodos] = useState(currentList.todos);

  useEffect(() => {
    changeTodos();
  }, [todos]);

  useEffect(() => {
    saveListChanges();
    setTodos(currentList.todos);
  }, [currentList]);

  function saveListChanges() {
    let res = [];
    for (let i = 0; i < todoLists.length; i++) {
      if (todoLists[i].id == currentList.id) res.push(currentList);
      else res.push(todoLists[i]);
    }
    setTodoLists(res);
    localStorage.setItem("LISTS", JSON.stringify(res));
  }

  function delCurrentList(id = currentList.id) {
    if (todoLists.length > 1) {
      let res = todoLists.filter((list) => list.id !== id);
      setTodoLists(res);
      setCurrentTodo(res[0]);
    }
  }

  function addNewList() {
    let res = todoLists;
    let newItem = { id: crypto.randomUUID(), title: "", todos: [] };
    res.push(newItem);
    setCurrentTodo(newItem);
    setTodoLists(res);
  }

  function changeTodos(title = currentList.title) {
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
      <BurgerMenuButton menuActive={menuActive} setMenuActive={setMenuActive} />
      <SideMenu
        active={menuActive}
        setActive={setMenuActive}
        items={todoLists}
        addNewList={addNewList}
        currentList={currentList}
        setCurrentList={setCurrentTodo}
      />
      <div className="px-10 mb-4">
        <TodoTitleInput onChange={changeTodos} listTitle={currentList.title} />
        <TodoSaveDelBtns del={delCurrentList} save={saveListChanges} />
      </div>
      <div className="w-full rounded-3xl p-10 bg-gray-50 text-2xl">
        <TodoAddItemForm onSubmit={addTodo} />
        <hr className="mt-12 mb-8 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        <TodoList
          todos={currentList.todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

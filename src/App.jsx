import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { TodoApp } from "./pages/TodoApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="*" element={<div>Not found 404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

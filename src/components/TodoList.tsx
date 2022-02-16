import React from "react";
import { TodoInterface } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: TodoInterface[];
  setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;

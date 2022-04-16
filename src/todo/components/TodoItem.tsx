import { Todo } from "../interfaces/interfaces";
import { useTodos } from "../hooks/useTodos";

interface props {
  todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
  // const {toggleTodo}= useContext(TodoContext)

  const { toggleTodo } = useTodos();

  const handlDbClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={handlDbClick}
    >
      {todo.desc}
    </li>
  );
};

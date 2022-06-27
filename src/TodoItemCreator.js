import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./atoms";

export default function TodoItemCreator() {
  const [inputVal, setInputVal] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputVal,
        isComplete: false,
      },
    ]);
    setInputVal("");
  };

  const onChange = ({ target: { value } }) => {
    setInputVal(value);
  };

  return (
    <div>
      <input type="text" value={inputVal} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}

import "./App.css";
import TodoList from "./TodoList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;

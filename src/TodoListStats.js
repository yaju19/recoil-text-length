import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./selectors";

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);
  return (
    <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
      <li>Total Items: {totalNum}</li>
      <li>Total Completed Items: {totalCompletedNum}</li>
      <li>Total Uncompleted Items: {totalUncompletedNum}</li>
      <li>Percentage Completed Items: {Math.round(percentCompleted)}</li>
    </ul>
  );
}

import { useRecoilValue } from "recoil";
import { charCountState } from "./AppStates";

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

import { useRecoilValue } from "recoil";
import { charCountState } from "./selectors";

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

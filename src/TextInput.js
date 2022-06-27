import { useRecoilState } from "recoil";
import { textState } from "./atoms";

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Text: {text}
    </div>
  );
}

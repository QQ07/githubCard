import { useSetRecoilState } from "recoil";
import { colorAtom } from "../store/state";



export function Buttons() {
  const setColor = useSetRecoilState(colorAtom);
//   console.log("Button");

  return (
    <div>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Red
      </button>

      <button
        onClick={() => {
          setColor("green");
        }}
      >
        Green
      </button>

      <button
        onClick={() => {
          setColor("orange");
        }}
      >
        Orange
      </button>

      <button
        onClick={() => {
          setColor("black");
        }}
      >
        Black
      </button>

      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        Blue
      </button>

      <button
        onClick={() => {
          setColor("white");
        }}
      >
        Default
      </button>
    </div>
  );
}

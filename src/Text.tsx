// source: https://codepen.io/Tbgse/pen/dYaJyJ
import { createEffect, createSignal, onCleanup } from "solid-js";

interface Props {
  play?: () => boolean;
}

export default function Text(props: Props) {
  const words = ["给最亲爱的小鱼", "生日快乐"];
  const colors = ["text-indigo-500", "text-red-500"];
  const [text, setText] = createSignal("");
  const [color, setColor] = createSignal(0);
  const [show, setShow] = createSignal(false);

  let showTextInterval;
  let showCursorInterval;
  const play = () => {
    let x = 1;
    let letterCount = 1;
    let wordIndex = 0;
    let waiting = false;
    showTextInterval = setInterval(() => {
      if (wordIndex === words.length-1 && letterCount === 0 && waiting === false) {
        clearInterval(showTextInterval);
        clearInterval(showCursorInterval);
        setText("")
        setShow(false);
      }
  
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        setText(words[wordIndex].substring(0, letterCount));
        window.setTimeout(function () {
          wordIndex++;
          x = 1;
          setColor(wordIndex);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[wordIndex].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        setText(words[wordIndex].substring(0, letterCount));
        letterCount += x;
      }
    }, 120);

    showCursorInterval = setInterval(() => {
      setShow(!show());
    }, 400);
  }

  createEffect(() => {
    if (props.play()) {
      play();
    }
  });

  onCleanup(() => {
    clearInterval(showCursorInterval);
    clearInterval(showTextInterval);
  });

  return (
    <div class="font-['FZYouHei'] text-6xl text-center h-[200px] w-[600px] absolute text-white inset-0 m-auto z-10">
      <span class={colors[color()]}>{text()}</span>
      <div
        class={`inline-block relative top-[-10px] left-[10px]`}
        classList={{
          "opacity-0": !show(),
        }}
      >
        &#95;
      </div>
    </div>
  );
}

import { createSignal, onCleanup } from "solid-js";

export default function Text() {
  const words = ["给最亲爱的小鱼", "生日快乐"];
  const colors = ["text-indigo-500"];
  const [text, setText] = createSignal("");
  const [color, setColor] = createSignal(0);
  const [show, setShow] = createSignal(true);

  const showCursorInterval = setInterval(() => {
    setShow(!show());
  }, 400);

  let wordIndex = 0;
  let charCount = 0;
  let reverse = false;
  let waiting = false;
  const showTextInterval = setInterval(() => {
    console.log(wordIndex, charCount);
    console.log(reverse);
    console.log(words[wordIndex].substring(0, charCount + 1))

    if (waiting) {
      waiting = false;
      return;
    }

    if (reverse) {
      charCount--;
      setText(words[wordIndex].substring(0, charCount + 1));

      if (charCount === -1) {
        const lastWord = wordIndex === words.length - 1;
        reverse = false;
        waiting = true;
        if (lastWord) {
          wordIndex = 0;
          setText("");
        } else {
          wordIndex += 1;
        }
        setColor(wordIndex);
      }
      return;
    }

    charCount ++;
    setText(words[wordIndex].substring(0, charCount + 1));
    // reached end of word, make the word disappear
    if (charCount === words[wordIndex].length) {
      reverse = true;
    }

  }, 300);

  onCleanup(() => {
    clearInterval(showCursorInterval);
    clearInterval(showTextInterval);
  });

  return (
    <div class="font-['Khula'] text-6xl text-center h-[200px] w-[600px] absolute text-white inset-0 m-auto">
      <span class={colors[color()]}>{text()}</span>
      <div
        class="inline-block relative top-[-0.14em] left-[10px]"
        classList={{
          "opacity-0": !show(),
        }}
      >
        &#95;
      </div>
    </div>
  );
}

import { createSignal, type Component } from "solid-js";
import Background from "./Background";
import PlayButton from "./PlayButton";
import Text from "./Text";

const App: Component = () => {
  const [play, setPlay] = createSignal(false);

  const handleClickPlay = () => {
    setPlay(true);
  };

  return (
    <>
      <div class="w-screen h-screen overflow-hidden flex justify-center items-center">
        {/* <Background play={play} />;
        <PlayButton onClick={handleClickPlay} />
        {play() && renderTitle()} */}
        {<Text />}
      </div>
    </>
  );
};

function renderTitle() {
  return (
    <div class="text-gray-100 text-[70px] font-['HigherMonday'] z-10 title">
      <h1>Happy Birthday 🎊</h1>
    </div>
  );
}

export default App;

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
        <PlayButton onClick={handleClickPlay} />
        <Background play={play} />;
        <Text play={play} />
      </div>
    </>
  );
};

export default App;

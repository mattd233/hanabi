import { createEffect, onCleanup } from "solid-js";

interface Props {
  play?: () => boolean;
}

export default function Background(props: Props) {
  

  createEffect(() => {
    if (props.play()) {
      video.play();
    }
  });

  let video;

  function handleLoad() {
    video.currentTime = 10;
  }

  onCleanup(() => {
    video.pause();
  });

  return (
    <div class="w-full fixed bottom-0 z-0">
      <video
        ref={video}
        src="public/fireworks.mp4"
        onLoadedMetadata={handleLoad}
        playsinline
        muted
      >
        <source src="assets/fireworks.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

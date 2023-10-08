import { createEffect, onCleanup } from "solid-js";

interface Props {
  play?: () => boolean;
  muted?: () => boolean;
}

export default function Background(props: Props) {
  let video;
  let audio;

  createEffect(() => {
    if (props.play()) {
      video.play();
      audio.play();
    }
  });

  createEffect(() => {
    if (props.play()) {
      video.play();
      audio.play();
    }
  });

  onCleanup(() => {
    video.pause();
  });

  const handleLoadAudeo = () => {
    audio.currentTime = 10;
  };

  const handleLoadVideo = () => {
    video.currentTime = 10;
  };

  return (
    <div class="w-full fixed bottom-0 z-0">
      <video ref={video} onLoadedMetadata={handleLoadVideo} playsinline muted>
        <source src={`${import.meta.env.VITE_VIDEO_URL}`} type="video/mp4" />
      </video>
      <audio
        class="hidden"
        ref={audio}
        onLoadedMetadata={handleLoadAudeo}
        controls
      >
        <source src={`${import.meta.env.VITE_AUDIO_URL}`} type="audio/mp4" />
      </audio>
    </div>
  );
}

// source: https://codepen.io/lukemeyrick/pen/qdxqwM/
// @ts-nocheck
import "./PlayButton.css";
import { createSignal } from "solid-js";

interface Props {
  onClick?: () => void;
}

export default function PlayButton(props: Props) {
  const [show, setShow] = createSignal(true);
  const clickPlay = () => {
    setShow(false);
    props.onClick();
  };

  return (
    <>
      {show() && (
        <div class="container z-20">
          <button
            onClick={clickPlay}
            class="playBut"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
              x="0px"
              y="0px"
              width="213.7px"
              height="213.7px"
              viewBox="0 0 213.7 213.7"
              enable-background="new 0 0 213.7 213.7"
              xml:space="preserve"
            >
              <polygon
                class="triangle"
                id="XMLID_18_"
                fill="none"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                points="
	73.5,62.5 148.5,105.8 73.5,149.1 "
              />

              <circle
                class="circle"
                id="XMLID_17_"
                fill="none"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                cx="106.8"
                cy="106.8"
                r="103.3"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

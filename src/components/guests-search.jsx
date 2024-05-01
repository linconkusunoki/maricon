"use client";

import { GuestsContext } from "@/components/guests-context";
import * as React from "react";

export function GuestSearch({ step, setStep }) {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState(false);
  const { setGuestsFound, guests } = React.useContext(GuestsContext);

  function handleSubmit(event) {
    event.preventDefault();

    if (name.length <= 3) {
      setError(true);
      return;
    }

    const regex = new RegExp(name, "i");
    setGuestsFound(guests.filter((guest) => regex.test(guest.name)));
    setStep(2);
    setName("");
    setError(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  if (step !== 1) {
    return null;
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="142"
        height="133"
        fill="none"
        viewBox="0 0 142 133"
        className="mx-auto"
      >
        <path
          fill="#A25A44"
          d="M105.285 69.977c.25 0 .582.166.748.25.25.165.499.331.665.58.166.25.333.5.416.832.083.166.083.25.166.416.083.166.083.332.166.415 0 .166.25.083.25 0 0-.166-.001-.415.083-.582l.083-.083v-.083c.083-.332.249-.582.498-.831.333-.416.831-.831 1.413-.997.25-.083.166-.333-.083-.333-.582.083-1.08-.25-1.413-.665l-.498-.748c-.167-.332-.25-.581-.416-.914 0-.083-.249-.083-.249 0v.416c-.083.415-.25.83-.499 1.163-.332.416-.831.665-1.413.748-.166.166-.166.416.083.416ZM96.476 51.444c.333.166.665.581.914.83.25.333.416.749.499 1.164.083.416.083.914.083 1.413 0 .25 0 .416-.083.665 0 .25 0 .498-.083.665-.083.166.332.332.415.166.084-.25.25-.499.5-.748.082 0 .082-.083.165-.083 0 0 0-.083.083-.083.333-.333.748-.665 1.164-.831.831-.333 1.745-.582 2.576-.416.333.083.416-.415.083-.498-.831-.25-1.329-.998-1.496-1.829-.083-.415-.166-.914-.166-1.33v-1.412c0-.167-.249-.25-.332-.084-.083.167-.166.416-.25.582-.332.499-.83.997-1.412 1.247-.748.332-1.58.332-2.41.166-.416-.083-.582.25-.25.416ZM75.872 39.532c-.652-.014-1.508.36-2.099.543-.659.313-1.256.822-1.725 1.4-.468.577-.876 1.352-1.283 2.126-.204.387-.34.645-.414 1.1-.204.388-.407.775-.414 1.1-.007.327-.788.245-.781-.08.074-.456.02-.979-.164-1.57-.129-.068-.06-.197-.19-.264 0 0 .068-.13-.061-.197-.245-.788-.618-1.644-1.128-2.242-1.019-1.195-2.235-2.329-3.661-2.75-.584-.142-.306-.984.278-.842 1.494.292 2.88-.462 3.817-1.617.468-.578 1.005-1.284 1.344-1.93l1.154-2.193c.136-.258.591-.184.585.142-.007.326-.082.781-.088 1.107.108 1.046.475 2.228 1.175 3.09.89 1.128 2.18 1.807 3.607 2.227.713.21.7.863.048.85ZM39.88 52.524c.166 0 .249-.166.083-.25-.416-.165-.665-.498-.831-.996-.083-.25-.083-.5-.083-.748v-.748c0-.083-.167-.083-.167-.083-.083.083-.083.249-.166.332-.166.25-.415.498-.748.665-.415.166-.83.166-1.247.083-.166-.083-.249.166-.082.25.166.082.332.248.498.498.083.166.25.415.25.665.082.249.082.498.082.748v.332c0 .083 0 .25-.083.333 0 .083.167.166.25.083.083-.167.166-.25.25-.416 0 0 .082 0 .082-.083v-.083c.166-.166.416-.333.582-.416.416-.166.914-.332 1.33-.166ZM90.492 41.97c.25-.084.499 0 .748 0 .25.083.499.166.665.332.25.166.415.332.582.582.083.083.166.249.249.332.083.083.166.25.25.332.082.084.249 0 .249-.083-.084-.166-.084-.332-.084-.498V42.8c0-.249.084-.581.167-.83.166-.5.498-.915.997-1.164.166-.083 0-.332-.166-.25-.416.167-.998.084-1.413-.166a1.942 1.942 0 0 1-.582-.581c-.166-.25-.415-.416-.582-.665-.083-.083-.249 0-.166.083.083.166.083.25.083.416.084.332 0 .747-.083 1.08a1.946 1.946 0 0 1-.997.997c-.166.083-.083.333.083.25ZM46.279 41.138c.25 0 .582.167.748.25.25.166.499.332.665.581.166.25.332.5.415.831.084.167.084.25.167.416.083.166.083.332.166.416 0 .166.25.083.25 0 0-.167 0-.416.082-.582l.083-.083v-.083c.084-.333.25-.582.499-.831.332-.416.831-.831 1.413-.998.25-.083.166-.332-.083-.332-.582.083-1.08-.25-1.413-.665l-.499-.748c-.166-.332-.25-.582-.415-.914 0-.083-.25-.083-.25 0v.415c-.083.416-.249.831-.498 1.164-.333.415-.831.665-1.413.748-.166.166-.166.498.083.415ZM43.952 59.339c.083 0 .25-.083.332-.083h.333c.249 0 .498 0 .83.083.25 0 .5.083.749.25.25.166.415.332.582.498.166.166.332.415.498.665.166.25.333.415.416.665.083.332.25.581.332.914.083.166.166.332.166.582h.167c.083 0 .166 0 .083-.083-.083-.333-.083-.582-.166-.915v-.166c0-.166-.084-.332-.084-.582 0-.249 0-.498.084-.748 0-.249.083-.581.166-.83.083-.25.083-.5.249-.749.166-.249.333-.415.582-.581.25-.167.415-.333.665-.416.083-.083.166-.083.249-.166.083-.083.25-.083.332-.166.083 0 .167-.084.083-.167-.083 0-.083 0-.166-.083h-.498c-.084 0-.167-.083-.25-.083-.415-.083-.83-.166-1.246-.332-.166-.083-.416-.166-.582-.25-.083-.083-.166-.083-.25-.166l-.249-.25c-.083 0-.083-.082-.166-.082 0 0-.083-.083-.083-.166-.083-.084-.166-.084-.166-.167s-.083-.083-.083-.166c-.083-.25-.167-.415-.25-.665 0-.083-.083-.25-.083-.332 0-.083-.083-.25-.083-.333v-.083h-.083v.166a.918.918 0 0 0 0 .665v.998c0 .083 0 .083-.083.166v.25c-.083.248-.166.498-.333.747-.166.25-.332.416-.498.582-.166.166-.333.332-.582.499-.083.083-.25.166-.332.249-.084.083-.167.25-.333.25-.083.082-.166.165-.25.165-.082.084-.165.084-.165.167 0 .249.083.249.166.249ZM35.06 70.06c-.084-.083-.084 0 0 0l-.167-.166c0-.083-.083-.084-.083-.167-.166-.166-.333-.332-.416-.581-.083-.083-.166-.166-.166-.333 0-.083-.083-.083-.083-.166v-.582c0-.166.083-.249.083-.415 0-.083.083-.166.083-.166 0-.084.083-.167.083-.167v-.083s-.083-.083-.083 0c0 0 0 .083-.083.083-.083.083-.166.167-.25.333-.082.083-.165.166-.165.25-.083.082-.083.165-.167.165h-.083l-.083.083c-.083.084-.249.167-.415.25-.166.083-.25.083-.416.083-.166 0-.25 0-.415.083h-.748c-.083 0 0 .083 0 .083.083 0 .083.083.166.083l.166.166c.083.084.25.167.332.333.084.083.167.25.25.332.083.166.083.25.083.416v.831c-.083.166-.083.332-.166.498 0 .084-.083.167-.083.333 0 0 0 .083.083.083h.083c.083-.166.166-.332.25-.415 0 0 0-.084.082-.084.083-.083.083-.166.166-.249.084-.083.167-.25.25-.332l.332-.333c.083-.083.25-.166.333-.25.166-.082.332-.082.498-.082h.582c.083 0 .166.083.166.083.083.083 0 .083 0 0ZM85.256 52.857c-.166-.167-.332-.333-.415-.582-.083-.083-.166-.166-.166-.333 0-.083-.084-.083-.084-.166v-.582c0-.166.084-.249.084-.415 0-.083.083-.166.083-.166 0-.083.083-.166.083-.166v-.084s-.083-.083-.083 0c0 0 0 .084-.084.084a1.147 1.147 0 0 0-.249.332c-.083.083-.166.166-.166.25-.083.082-.083.165-.166.165h-.083l-.084.084c-.083.083-.249.166-.415.249-.166.083-.25.083-.416.083-.166 0-.249 0-.415.083h-.748c-.083 0 0 .083 0 .083.083 0 .083.083.166.083l.166.166c.084.084.25.167.333.333.083.083.166.25.25.332.082.167.082.25.082.416v.831c-.083.166-.083.332-.166.499 0 .083-.083.166-.083.332 0 0 0 .083.083.083h.083c.083-.166.166-.332.25-.415 0 0 0-.084.083-.084.083-.083.083-.166.166-.249.083-.083.166-.25.25-.332l.332-.333c.083-.083.249-.166.332-.249.166-.083.332-.083.499-.083h.581c.084 0 .167.083.167.083s.083 0 .083-.083c0 0 0-.083-.083-.083l-.084-.083c0-.083-.083-.083-.166-.083.083.083 0 .083 0 0Z"
        />
        <path
          fill="#A25A44"
          d="M98.803 116.018c-.083 0-.083-.083-.166-.083-.083-.166-.166-.249-.25-.415-.165-.249-.249-.582-.249-.914 0-.582.084-1.164.25-1.746 0-.166.083-.332.083-.498.25-.914.25-1.662.083-2.327-.166-.665-.416-1.33-.831-1.912a5.643 5.643 0 0 0-.998-.997c.416-.416.832-.665 1.164-.914.083-.083.083-.083.083-.166 11.137-8.477 17.619-21.442 17.619-35.57 0-24.684-20.029-44.713-44.712-44.713-24.683 0-44.712 20.03-44.712 44.712 0 7.813 2.078 15.542 5.984 22.356 3.075 5.236 7.147 9.89 12.05 13.547 0 0 0 .083.084.083l.748.748h.083a4.765 4.765 0 0 0-.915.914c-.415.582-.665 1.247-.83 1.912-.167.665-.084 1.413.082 2.327 0 .166.083.332.083.498.167.582.333 1.164.25 1.746 0 .332-.083.581-.25.914-.083.166-.166.249-.249.415-.581.25-.997.582-1.33.998-.83.914-1.412 2.327-1.495 3.74-.084.914 0 1.828.166 2.493v2.161c.166.498.498.831.83 1.08 3.491 3.74 15.625 6.399 29.504 6.399h.416c13.463-.083 25.347-2.659 28.838-6.316.416-.249.748-.582.914-1.08.083-.167 0-.333 0-.499V123.249c.083-.748.166-1.33.166-1.912 0-1.496-.415-2.908-1.246-3.989-.166-.582-.665-.997-1.247-1.33Zm-71.39-45.46c0-24.018 19.531-43.548 43.55-43.548 24.017 0 43.548 19.53 43.548 43.548 0 14.544-7.065 27.842-18.949 35.986-.25 0-.499.083-.831.333-.416.249-.748.498-1.164.664-.166.084-.415.167-.581.25-.333.083-.582.249-.915.332h-.083c-.249.083-.498.166-.748.333-4.155 1.08-11.22 1.911-20.361 1.911-10.97 0-20.943-1.33-23.686-3.158l-.083-.083c-12.383-8.145-19.696-21.691-19.696-36.568Zm17.536 38.563c.25-.333.582-.748.998-1.081.166.166.332.249.498.333.333.249.748.415 1.164.498.083 0 .166.083.332.083 4.072 1.662 12.882 2.743 23.104 2.743 9.724 0 18.367-.997 22.605-2.576.167 0 .333-.084.5-.084a3.607 3.607 0 0 0 1.495-.748c.166-.083.25-.249.416-.415.332.332.664.582.914.997.332.499.582 1.081.582 1.662 0 .665-.167 1.33-.416 1.912l-.083.249a9.44 9.44 0 0 1-.831 1.579c-.333.416-.582.665-.914.998a2.526 2.526 0 0 1-.582.415l-.083.083c-.166.083-.333.166-.416.333-1.163.498-2.576.914-4.404 1.329-4.82 1.081-11.386 1.746-18.533 1.746h-.748c-6.981-.084-13.547-.748-18.284-1.829-1.745-.415-3.158-.831-4.322-1.33-.083-.166-.25-.249-.415-.332l-.083-.083c-.167-.166-.416-.249-.582-.416a3.53 3.53 0 0 1-.914-.997 9.479 9.479 0 0 1-.831-1.579l-.084-.249c-.166-.499-.332-.998-.332-1.496-.25-.499-.083-1.247.25-1.745Zm54.602 10.222V119.758c-1.08.998-3.657 2.078-7.396 2.909-5.486 1.247-12.965 1.912-21.027 1.912h-.249c-8.061 0-15.541-.665-21.026-1.912-3.74-.831-6.316-1.828-7.397-2.909v-1.08c0-.083.083-.166.083-.249.083-.167.166-.333.333-.499.332-.332.748-.665 1.08-.914.083-.083.166-.083.25-.166.166-.084.249-.167.415-.25.083 0 .083-.083.166-.083.166-.083.333-.249.499-.415l.166-.167c3.49 2.743 14.544 4.322 25.099 4.405h.748c10.637-.083 21.857-1.662 25.347-4.405l.167.167c.166.166.332.249.498.415.083 0 .083.083.166.083.167.083.25.166.416.25.083.083.166.083.25.166.332.249.83.498 1.08.914.166.166.25.332.332.499.083.083.083.166.083.249v.166c-.083.25-.083.416-.083.499Z"
        />
        <path
          fill="#A25A44"
          d="m33.95 102.335-17.494 15.089.814.944 17.495-15.089-.815-.944ZM36.399 105.321l-4.127 4.671.809.715 4.128-4.67-.81-.716ZM39.644 107.784l-3.204 4.35.87.64 3.204-4.349-.87-.641ZM32.405 99.914l-3.7 2.54.611.891 3.7-2.54-.611-.89ZM26.65 103.027l-5.256 3.504.6.899 5.254-3.504-.599-.899ZM19.46 108.255l-3.814 3.081.68.84 3.814-3.081-.68-.84ZM29.663 96.912l-13.022 7.856.558.925 13.022-7.856-.558-.925ZM28.077 93.84l-3.969 1.912.47.973 3.968-1.911-.469-.973ZM21.477 96.903l-6.53 2.903.438.987 6.531-2.903-.439-.987ZM26.042 90.055l-6.464 3.05.46.977 6.465-3.05-.461-.977ZM24.13 86.214 3.846 93.658l.43 1.17 20.285-7.444-.43-1.17ZM25.036 82.431 20.71 83.63l.288 1.042 4.325-1.199-.288-1.04ZM18.541 83.572l-6.109 1.605.275 1.044 6.109-1.605-.275-1.044ZM10.083 86.31l-4.61 1.674.37 1.015 4.608-1.673-.368-1.016ZM23.489 78.788l-14.87 3.197.227 1.057 14.87-3.197-.227-1.056ZM22.943 75.359l-4.374.516.127 1.073 4.374-.516-.127-1.073ZM15.63 76.068l-7.12.622.094 1.076 7.12-.622-.094-1.076ZM22.186 71.104l-7.105.784.119 1.073 7.104-.783-.118-1.074ZM21.67 66.933l-21.605.444.026 1.246 21.604-.444-.026-1.246ZM16.872 63.725l-.337 1.026 4.264 1.401.337-1.026-4.264-1.401ZM9.2 60.47l-.35 1.022 5.973 2.054.351-1.022-5.973-2.053ZM1.842 58.864l-.257 1.05 4.764 1.163.256-1.05-4.763-1.163ZM7.806 55.638l-.397 1.005 14.146 5.587.397-1.004-14.146-5.588ZM19.47 56.087l-.49.963 3.926 1.997.49-.963-3.926-1.997ZM10.66 51.199l-.518.948 6.269 3.432.519-.948-6.27-3.432ZM18.77 50.831l-.497.96 6.346 3.288.497-.96-6.346-3.288ZM8.688 38.741l-.67 1.051 18.223 11.612.67-1.05L8.688 38.74ZM25.807 42.887l-.548.931 3.867 2.278.548-.931-3.867-2.278ZM18.918 38.139l-.561.923 5.399 3.278.56-.924-5.398-3.277ZM12.116 34.907l-.474.97 4.406 2.152.474-.97-4.406-2.152ZM18.565 33.065l-.602.898 12.631 8.472.602-.897-12.63-8.473ZM29.86 35.992l-.683.836 3.41 2.787.684-.836-3.41-2.787ZM22.273 29.33l-.709.816 5.395 4.689.709-.816-5.395-4.688ZM30.343 30.668l-.69.831 5.5 4.565.69-.831-5.5-4.565ZM23.087 16.762l-.879.885 15.33 15.227.88-.884-15.331-15.227ZM39.338 27.897l-.915.574 2.386 3.802.915-.575-2.386-3.8ZM35.49 20.46l-.923.561 3.285 5.395.923-.562-3.285-5.395ZM30.927 14.531l-.867.644 2.921 3.938.868-.644-2.922-3.938ZM37.448 15.825l-.947.52 7.315 13.333.947-.52-7.315-13.333ZM46.199 23.648l-.992.428 1.746 4.044.992-.429-1.746-4.043ZM42.5 14.27l-1.004.397 2.632 6.645 1.004-.398-2.632-6.645ZM48.988 19.184l-.995.42 2.782 6.584.995-.42-2.782-6.584ZM54.423 24.434l.167.498.997-.249-.083-.582.166-.083-.997-3.075-.166-.665L49.02 3.49l-1.163.333 6.565 20.61ZM56.345 8.184l-1.06.206 2.901 14.929 1.06-.206-2.901-14.93ZM62.338 18.235l-1.075.106.43 4.384 1.076-.106-.43-4.384ZM61.644 8.273l-1.078.072.48 7.131 1.079-.072-.481-7.131ZM66.37 14.906l-1.075.097.642 7.118 1.076-.097-.642-7.118ZM107.829 102.358l-.814.944 17.494 15.089.815-.944-17.495-15.089ZM105.46 105.296l-.81.716 4.128 4.67.809-.715-4.127-4.671ZM102.231 107.662l-.87.641 3.204 4.349.87-.64-3.204-4.35ZM109.546 99.87l-.611.89 3.7 2.54.612-.891-3.701-2.54ZM115.287 102.964l-.599.899 5.256 3.503.599-.899-5.256-3.503ZM122.448 108.31l-.678.841 3.814 3.081.679-.841-3.815-3.081ZM112.172 96.88l-.558.924 13.021 7.857.559-.925-13.022-7.857ZM113.888 93.79l-.469.973 3.969 1.911.469-.973-3.969-1.911ZM120.438 96.849l-.439.987 6.531 2.902.439-.987-6.531-2.902ZM115.86 89.987l-.462.977 6.464 3.05.462-.976-6.464-3.05ZM117.809 86.338l-.43 1.17 20.286 7.444.429-1.17-20.285-7.444ZM116.843 82.472l-.288 1.04 4.325 1.199.288-1.041-4.325-1.198ZM123.35 83.596l-.274 1.045 6.109 1.605.274-1.045-6.109-1.605ZM131.914 86.212l-.369 1.016 4.61 1.673.368-1.016-4.609-1.673ZM118.446 78.784l-.227 1.056 14.869 3.197.227-1.057-14.869-3.197ZM119.066 75.285l-.127 1.073 4.374.516.127-1.073-4.374-.516ZM126.259 76.096l-.094 1.076 7.12.623.094-1.077-7.12-.622ZM119.707 71.075l-.118 1.073 7.104.784.119-1.074-7.105-.784ZM120.331 66.917l-.025 1.246 21.603.446.026-1.247-21.604-.445ZM124.957 63.753l-4.263 1.402.337 1.026 4.264-1.401-.338-1.027ZM132.727 60.487l-5.973 2.053.351 1.022 5.973-2.053-.351-1.022ZM140.049 58.848l-4.763 1.164.257 1.05 4.763-1.164-.257-1.05ZM134.174 55.662l-14.145 5.587.397 1.005 14.145-5.588-.397-1.004ZM122.519 56.02l-3.926 1.996.489.963 3.927-1.996-.49-.963ZM131.278 51.195l-6.269 3.432.519.948 6.269-3.432-.519-.948ZM123.104 50.88l-6.346 3.288.497.96 6.346-3.289-.497-.959ZM133.127 38.691l-18.222 11.612.67 1.052 18.222-11.613-.67-1.05ZM116.179 42.904l-3.867 2.277.548.931 3.867-2.277-.548-.931ZM123.012 38.114l-5.399 3.279.561.923 5.399-3.278-.561-.923ZM129.868 34.959l-4.407 2.152.475.97 4.406-2.152-.474-.97ZM123.431 33.078 110.8 41.55l.602.898 12.631-8.473-.602-.898ZM112.096 35.898l-3.41 2.787.683.837 3.411-2.787-.684-.837ZM119.632 29.399l-5.395 4.688.708.816 5.396-4.688-.709-.816ZM111.622 30.76l-5.499 4.565.69.831 5.499-4.565-.69-.831ZM118.837 16.79l-15.331 15.228.879.884 15.331-15.227-.879-.884ZM102.547 27.958l-2.385 3.801.915.575 2.385-3.802-.915-.574ZM106.411 20.508l-3.285 5.394.923.562 3.285-5.395-.923-.561ZM111.01 14.543l-2.923 3.938.868.644 2.922-3.938-.867-.644ZM104.445 15.847l-7.316 13.334.948.52 7.315-13.334-.947-.52ZM95.672 23.565l-1.746 4.044.992.428 1.746-4.043-.992-.429ZM99.405 14.286l-2.632 6.645 1.005.398 2.632-6.645-1.005-.398ZM92.87 19.203l-2.782 6.584.995.42 2.782-6.583-.995-.42ZM86.42 24.101l-.166.582 1.08.25.083-.5h.084l6.565-20.61-1.247-.333-5.402 16.788-.166.665-.997 3.075.166.083ZM85.508 8.286l-2.9 14.929 1.06.206 2.9-14.93-1.06-.205ZM79.524 18.25l-.43 4.384 1.075.105.43-4.384-1.075-.105ZM80.25 8.307l-.481 7.13 1.078.074.482-7.131-1.078-.073ZM75.55 14.984l-.642 7.118 1.076.097.642-7.118-1.076-.097ZM71.212 0h-1.247v21.608h1.246V0Z"
        />
      </svg>

      <h2 className="text-4xl uppercase lg:text-5xl font-secondary">
        Prevemos você no nosso dia
      </h2>
      <p className="font-primary">
        Para confirmar a sua presença no casamento é só escrever o seu nome e
        clicar em <span className="font-bold">Buscar</span>. Seu nome aparecerá
        e você poderá confirmar sua presença e dos convidados vindo com você :)
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[475px] gap-4 lg:flex mx-auto lg:items-start"
      >
        <div className="w-full md:min-w-[350px]">
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="bg-[#D7D5B4] bg-opacity-50 text-bronze px-8 py-4 w-full placeholder-bronze outline-bronze uppercase"
            placeholder="Primeiro nome"
          />
          {error && (
            <p className="text-sm font-primary text-earth">
              Mínimo de 4 letras
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-12 py-4 mt-4 lg:mt-0 btn disabled:bg-sand"
          disabled={guests.length === 0}
        >
          Buscar
        </button>
      </form>
    </>
  );
}

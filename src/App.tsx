import { useState } from "react";
import patternMobileIcon from "./assets/images/pattern-divider-mobile.svg";
import patterDesktopIcon from "./assets/images/pattern-divider-desktop.svg";
import buttonDiceIcon from "./assets/images/icon-dice.svg";

type InitialAdviceProps = {
  id: number;
  advice: string;
};

const initialAdvice: InitialAdviceProps = {
  id: 117,
  advice:
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
};

function App() {
  const [adviceData, setAdviceData] = useState(initialAdvice);

  async function fetchAdviseData() {
    try {
      const res = await fetch("	https://api.adviceslip.com/advice");
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      setAdviceData(data.slip);
    } catch (error) {
      console.error("Failed to fetch advice:", error);
    }
  }

  return (
    <div className="text-LightCyan mx-4 flex h-dvh items-center justify-center">
      <header className="sr-only">
        <h1>Advice Generator</h1>
      </header>

      <main className="bg-DarkGrayishBlue dropShadow relative flex w-full max-w-[33.75rem] flex-col items-center rounded-[10px] px-6 pt-10 pb-16 text-center sm:rounded-[15px] sm:px-12 sm:pt-12 sm:pb-[4.5rem]">
        <h2 className="text-NeonGreen text-[0.69rem] leading-[0.94rem] font-extrabold tracking-[3.48px] uppercase sm:text-[0.81rem] sm:leading-[1.11rem] sm:tracking-[4.09px]">
          Advice #{adviceData.id}
        </h2>
        <p className="text-LightCyan mt-6 text-2xl leading-[2.06rem] font-extrabold tracking-[-0.26px] sm:text-[1.75rem] sm:leading-[2.09rem] sm:tracking-[-0.3px]">
          &quot;{adviceData.advice}&quot;
        </p>

        <picture>
          <source srcSet={patternMobileIcon} media="(max-width: 767px)" />
          <source srcSet={patterDesktopIcon} media="(min-width: 768px)" />
          <img src={patternMobileIcon} alt="" className="mt-6 sm:mt-10" />
        </picture>

        <button
          onClick={fetchAdviseData}
          className="bg-NeonGreen btnDropShadow absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer rounded-full p-5 transition-all duration-300 ease-in-out"
          aria-label="click to generate next advice"
        >
          <img src={buttonDiceIcon} alt="" className="" />
        </button>
      </main>
    </div>
  );
}

export default App;

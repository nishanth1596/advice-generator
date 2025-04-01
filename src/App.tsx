import { useEffect, useState } from "react";

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

  useEffect(() => {
    fetchAdviseData();
  }, []);

  return (
    <div className="text-LightCyan mx-4 flex h-dvh items-center justify-center">
      <header className="sr-only">
        <h1>Advice Generator</h1>
      </header>

      <main className="bg-DarkGrayishBlue dropShadow w-full px-6 pt-10 text-center">
        <h2 className="text-NeonGreen text-[0.69rem] leading-[0.94rem] font-extrabold tracking-[3.48px] uppercase">
          Advice #{adviceData.id}
        </h2>
        <p className="text-LightCyan mt-6 text-2xl leading-[2.06rem] font-extrabold tracking-[-0.26px]">
          &quot;{adviceData.advice}&quot;
        </p>
        <button onClick={fetchAdviseData} className="cursor-pointer">
          X
        </button>
      </main>
    </div>
  );
}

export default App;

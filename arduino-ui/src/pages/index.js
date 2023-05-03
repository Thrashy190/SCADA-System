import Image from "next/image";
import { Inter } from "next/font/google";
import ReactSpeedometer from "react-d3-speedometer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const SPEED_URL = "http://localhost:1880/change-speed";
const STOP_URL = "http://localhost:1880/stop";
const MODE_URL = "http://localhost:1880/mode";

export default function Home() {
  const [speed, setSpeed] = useState(0);
  const [mode, setMode] = useState(0);
  const [stop, setStop] = useState(true);

  const handlerSpeedChange = async (e) => {
    setSpeed(e.target.value);
    const response = await fetch(`${SPEED_URL}?value=${e.target.value}`);
  };

  const handlerStop = async () => {
    const response = await fetch(`${STOP_URL}?status=${stop}`);
    setStop(!stop);
  };

  const handlerButtonClick = async (e) => {
    const response = await fetch(`${MODE_URL}?mode=${e.target.value}`);
    setMode(e.target.value);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center mb-4">
            Control de arduino
          </h1>
          <ReactSpeedometer
            maxValue={500}
            value={speed}
            needleColor="red"
            startColor="green"
            segments={10}
            endColor="blue"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <input
                type="range"
                min="0"
                max="500"
                className="slider"
                id="myRange"
                onChange={handlerSpeedChange}
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-2 mb-2">
              <button
                value="1"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 "
                onClick={handlerButtonClick}
              >
                1
              </button>
              <button
                value="2"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 "
                onClick={handlerButtonClick}
              >
                2
              </button>
              <button
                value="3"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 "
                onClick={handlerButtonClick}
              >
                3
              </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 mb-2">
              <button
                value="4"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8"
                onClick={handlerButtonClick}
              >
                4
              </button>
              <button
                value="5"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8"
                onClick={handlerButtonClick}
              >
                5
              </button>
              <button
                value="6"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8"
                onClick={handlerButtonClick}
              >
                6
              </button>
            </div>
            <div className="flex flex-row items-center justify-center mb-8">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8"
                onClick={handlerButtonClick}
              >
                Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

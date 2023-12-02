import Image from "next/image";
import WordsContainer from "./components/WordsContainer";

export default function Home() {
  return (
    <div className="bg-[#232D3F] h-screen  p-10 flex flex-col  ">
      <h1 className=" text-white mx-auto text-3xl">Day 1 : Trebuchet?!</h1>

      <div className="flex flex-col  flex-1 justify-center items-center">
        <WordsContainer />
      </div>
    </div>
  );
}

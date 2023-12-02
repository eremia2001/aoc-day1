"use client";
import React, { useState, useEffect } from "react";
import { data } from "../data/data.js";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import WordItem from "./WordItem";
import { motion, AnimatePresence, delay } from "framer-motion";

const WordsContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordList, setWordList] = useState(data);
  const [displayWords, setDisplayWords] = useState(setDefault());
  const wordTransitionTime = 2000;
  const wordHeight = 28;
  const containerHeight = 250;

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(newIndex);

      const updatedWords = wordList.map((word, index) => {
        if (index === currentIndex) {
          return (
            <WordItem
              {...word}
              isCurrent={true}
              key={index}
              currentIndex={currentIndex}
            />
          );
        } else {
          return (
            <WordItem
              {...word}
              isCurrent={displayWords[index].props.isCurrent}
              key={index}
              currentIndex={currentIndex}
            />
          );
        }
      });
      setDisplayWords(updatedWords);
    }, wordTransitionTime);

    return () => clearInterval(interval);
  }, [currentIndex]); // Abhängigkeit von currentIndex hinzufügen

  function setDefault() {
    const result = wordList.map((word, index) => (
      <WordItem
        {...word}
        isCurrent={false}
        key={index}
        currentIndex={currentIndex}
        index={index}
      />
    ));

    return result;
  }

  return (
    <div
      className="flex flex-row text-white items-center gap-10 p-10 shadow-2xl w-[500px] justify-center"
      style={{ height: `${containerHeight}px` }}
    >
      {" "}
      <MdOutlineArrowForwardIos />
      <div className="flex flex-col gap-5 text-xl h-full overflow-hidden">
        <motion.div
          initial={{ y: 70 }}
          animate={{
            y: 70 - currentIndex * wordHeight,
            transition: { delay: 1, duration: 1 },
          }}
        >
          {displayWords.map((word) => word)}
        </motion.div>
      </div>
    </div>
  );
};

export default WordsContainer;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WordItem = ({
  word,
  firstNumber,
  lastNumber,
  isCurrent,
  currentIndex,
  index,
}) => {
  // Zerlege das Wort in die erforderlichen Teile
  const beforeFirstNum = word.substring(0, firstNumber.firstIndex);
  const firstNum = word.substring(
    firstNumber.firstIndex,
    firstNumber.lastIndex + 1
  );
  const betweenNumbers = word.substring(
    firstNumber.lastIndex + 1,
    lastNumber.firstIndex
  );
  const lastNum = word.substring(
    lastNumber.firstIndex,
    lastNumber.lastIndex + 1
  );
  const afterLastNum = word.substring(lastNumber.lastIndex + 1);

  const indexDiff = 0; //Math.abs(currentIndex - index);

  function getOpacity() {
    let result = "";
    switch (indexDiff) {
      case 0:
        result = "opacity-100";
        break;
      case 1:
        result = "opacity-60";
        break;
      case 2:
        result = "opacity-40";
        break;
      case 3:
        result = "opacity-10";
        break;

      default:
        result = "opacity-100";
        break;
    }
    return result;
  }

  const initialColor = "#93B1A6"; // Startfarbe, ersetzen Sie diesen Wert mit Ihrer primären Textfarbe
  const targetColorFirstNumber = "#4CD7A4"; // Ziel-Farbe für firstNumber
  const targetColorLastNumber = "#D37058"; // Ziel-Farbe für lastNumber

  // Farb-Animationskonfigurationen
  const firstNumAnimation = {
    color: targetColorFirstNumber,
    transition: { duration: 0.1, delay: 0.1 },
  };
  const lastNumAnimation = {
    color: targetColorLastNumber,
    transition: { duration: 0.2, delay: 0.1 },
  };

  return (
    <motion.div className={`text-primary ${getOpacity()}`}>
      {isCurrent ? (
        <div>
          {beforeFirstNum}
          <motion.span
            style={{ color: initialColor }}
            animate={firstNumAnimation}
          >
            {firstNum}
          </motion.span>
          {betweenNumbers}
          <motion.span
            style={{ color: initialColor }}
            animate={lastNumAnimation}
          >
            {lastNum}
          </motion.span>
          {afterLastNum}
        </div>
      ) : (
        <p>{word}</p>
      )}
    </motion.div>
  );
};

export default WordItem;

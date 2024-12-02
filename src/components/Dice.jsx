import { useEffect, useState } from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";

const Dice = () => {
  const [dice1, setDice1] = useState(Math.floor(Math.random() * 6) + 1);
  const [dice2, setDice2] = useState(Math.floor(Math.random() * 6) + 1);

  const getDiceImage = (dice) => {
    if (dice === 1) return one;
    if (dice === 2) return two;
    if (dice === 3) return three;
    if (dice === 4) return four;
    if (dice === 5) return five;
    if (dice === 6) return six;
  };
  const handleDiceRoller = (dice = null) => {
    if (dice === dice1) {
      setDice1(Math.floor(Math.random() * 6) + 1);
    } else if (dice === dice2) {
      setDice2(Math.floor(Math.random() * 6) + 1);
    } else {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
    }
  };

  const handleClickOutside = (event) => {
    const diceDiv = document.querySelector(".dice");
    if (diceDiv && !diceDiv.contains(event.target)) {
      handleDiceRoller();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dice">
      <img
        className="dice1"
        src={getDiceImage(dice1)}
        alt="dice1"
        onClick={() => handleDiceRoller(dice1)}
      />
      <img
        className="dice2"
        src={getDiceImage(dice2)}
        alt="dice2"
        onClick={() => handleDiceRoller(dice2)}
      />
    </div>
  );
};

export default Dice;

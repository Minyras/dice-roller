import { useState } from "react";
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
  const handleDiceRoller = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
  };
  console.log(dice1, dice2);
  return (
    <div className="dice">
      <img
        className="dice1"
        src={getDiceImage(dice1)}
        alt="1"
        onClick={handleDiceRoller}
      />
      <img
        className="dice2"
        src={getDiceImage(dice2)}
        alt="2"
        onClick={handleDiceRoller}
      />
    </div>
  );
};

export default Dice;

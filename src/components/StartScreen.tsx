import { Button } from "./Button";
import { ButtonNextStep } from "./ButtonNextStep";

export const StartScreen = () => {
  const handleClick = () => {
    console.log("asdas");
  };
  return (
    <div className="start-screen">
      <div className="start-wrapper">
        <div className="moving-nlo"></div>
        <h1>ПОЙМАЙ ПРИШЕЛЬЦА!</h1>
        <ButtonNextStep>Начать</ButtonNextStep>
      </div>
    </div>
  );
};

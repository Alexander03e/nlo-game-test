import { useEffect, useState } from "react";
import { StartScreen } from "./components/StartScreen";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { GameStart } from "./components/GameStart";

export const Game = () => {
  const { step } = useAppSelector((state) => state.game);
  const renderScreen = (step: number) => {
    switch (step) {
      case 0:
        return <StartScreen />;
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <GameStart />;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="background">{renderScreen(step)}</div>
    </div>
  );
};

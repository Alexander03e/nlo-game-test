import { StatsWrapper } from "./StatsWrapper";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { timeChange } from "../store/gameSlice";
import { useEffect } from "react";
export const GameStart = () => {
  const { maxNlo, destroyed, timeLeft } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const changeTimer = () => {
    timeLeft === 0 ? alert("ee") : "";
    dispatch(timeChange());
  };

  useEffect(() => {
    timeLeft < 0 ? alert("dd") : "";
    const timer = setInterval(() => {
      // dispatch(timeChange());
      changeTimer();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="game__start">
      <div className="stats">
        <StatsWrapper>
          <img
            src="../../../public/chars/nlo/shipGreen_manned.svg"
            style={{ width: "32px" }}
            alt=""
          />
          {`${destroyed}/${maxNlo}`}
        </StatsWrapper>
        <StatsWrapper>
          <img src="../../../public/clock.svg" alt="" />
          {`00:${timeLeft}`}
        </StatsWrapper>
      </div>
    </div>
  );
};

import { Button } from "./Button";
import { useAppDispatch } from "../store/hooks";
import { nextStep } from "../store/gameSlice";

export const ButtonNextStep = ({ children }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(nextStep());
  };
  return <Button onClick={handleClick}>{children}</Button>;
};

import { Button } from "./Button";
import { ButtonNextStep } from "./ButtonNextStep";
import { StepsContainer } from "./StepsContainer";
export const StepOne = () => {
  return (
    <>
      <StepsContainer>
        <div className="step-one__finger"></div>
        <p>Нажимай на НЛО и отравляй их В ДАЛЕКИЙ КОСМОС!</p>
        <ButtonNextStep>Ясно</ButtonNextStep>
      </StepsContainer>
    </>
  );
};

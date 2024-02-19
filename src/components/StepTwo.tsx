import { ButtonNextStep } from "./ButtonNextStep";
import { StepsContainer } from "./StepsContainer";
export const StepTwo = () => {
  return (
    <>
      <StepsContainer>
        <div className="step-two__finger"></div>
        <p>
          НО НЕ ВСЕ ИНОПЛАНЕТЯНЕ ЗЛЫЕ. КТО-то ПРОСТО УСТАЛ ИЛИ ЗАБОЛЕЛ. ДАЙ ИМ
          ПРОСТО УЛЕТЕТЬ И ВСЁ БУДЕТ ХОРОШО!
        </p>
        <ButtonNextStep>Погнали</ButtonNextStep>
      </StepsContainer>
    </>
  );
};

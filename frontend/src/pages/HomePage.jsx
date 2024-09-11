import { Header } from "../components/Header/Header";
import { InputSection } from "../components/InputSection/InputSection";
import { QuestionInput } from "../components/QuestionInput/QuestionInput";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <InputSection>
        <QuestionInput />
      </InputSection>
    </div>
  );
};

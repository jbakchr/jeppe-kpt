import { Header } from "../../components/Header/Header";
import { QuestionAndAnswerList } from "../../components/QuestionAndAnswerList/QuestionAndAnswerList";
import { InputSection } from "../../components/InputSection/InputSection";
import { QuestionInput } from "../../components/QuestionInput/QuestionInput";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <QuestionAndAnswerList />
      <InputSection>
        <QuestionInput />
      </InputSection>
    </div>
  );
};

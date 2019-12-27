import * as React from "react";
import ResultsComponent from "../resultsComponent/resultsComponent";
import { useSelector } from "../../../redux";
import { Question } from "../../redux/reducers/quiz";

export interface ResultsContainerProps {}

const ResultsContainer: React.SFC<ResultsContainerProps> = () => {
  // Redux state
  const quizData = useSelector(state => state.Quiz);
  const { quizAmountOfQuestions } = useSelector(state => state.Trivia);

  //   Number of right answers
  const rightAnswers =
    quizData &&
    quizData.questions.reduce((acumulator: number, question: Question) => {
      if (question.userAnswer === question.correctAnswer) return acumulator + 1;
      else return acumulator;
    }, 0);

  // Has reached end of questions
  const showResults =
    quizData && quizAmountOfQuestions - 1 === quizData.currentQuestionNumber;

  return (
    <ResultsComponent
      quizAmountOfQuestions={quizAmountOfQuestions}
      rightAnswers={rightAnswers}
      showResults={showResults}
    />
  );
};

export default ResultsContainer;

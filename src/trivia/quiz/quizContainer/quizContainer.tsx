import * as React from "react";
import { useSelector } from "../../../redux";
import QuizComponent from "../quizComponent/quizComponent";
import { Redirect, RouteComponentProps, useHistory } from "react-router-dom";
import useKeyPress from "../../../utils/useKeyPress";
import { useDispatch } from "react-redux";
import * as actionTypes from "../../redux/types/";
import ProgressComponent from "../progressComponent/progressComponent";

export interface QuizContainerProps {
  location: RouteComponentProps;
}

const QuizContainer: React.SFC<QuizContainerProps> = ({ location }) => {
  // Hooks
  const { push } = useHistory();
  const dispatch = useDispatch();
  // Redux state
  const { isLoading, quizAmountOfQuestions } = useSelector(
    state => state.Trivia
  );
  const quizData = useSelector(state => state.Quiz);
  // Current quiz question and result
  const quiz = quizData && quizData!.questions[quizData!.currentQuestionNumber];

  //   Handle selection through keyboard when on desktop
  const trueSelected = window ? useKeyPress("ArrowRight") : null;
  const falseSelected = window ? useKeyPress("ArrowLeft") : null;
  const continueSelected = window ? useKeyPress("Enter") : null;
  React.useEffect(() => {
    if (trueSelected) handleTrue();
    if (falseSelected) handleFalse();
    if (continueSelected) handleContinue();
  }, [trueSelected, falseSelected, continueSelected]);

  // Redirect to home on attempt to access route /quiz manually
  if (!quizData && !isLoading) return <Redirect to="/home" />;

  //   Handlers
  const handleTrue = () => {
    if (!quiz.userAnswer)
      dispatch({ type: actionTypes.USER_ANSWERED, value: true });
  };
  const handleFalse = () => {
    if (!quiz.userAnswer)
      dispatch({ type: actionTypes.USER_ANSWERED, value: false });
  };
  const handleContinue = () => {
    //   Reached end of questions
    if (quizAmountOfQuestions - 1 === quizData.currentQuestionNumber) {
      dispatch({ type: actionTypes.GAME_FINISHED });
      push("/results");
    } else if (quiz.userAnswer !== undefined)
      dispatch({ type: actionTypes.NEXT_QUESTION });
  };

  //   Question result
  const gotItRight =
    quiz && quiz.userAnswer !== undefined
      ? quiz.correctAnswer === quiz.userAnswer
        ? true
        : false
      : null;

  if (isLoading) return <h1>loading...</h1>;
  return (
    <div style={{ display: "flex", flexFlow: "column", width: "100%" }}>
      <ProgressComponent questions={quizData && quizData.questions} />
      <QuizComponent
        quiz={quiz}
        handleTrue={handleTrue}
        handleFalse={handleFalse}
        handleContinue={handleContinue}
        gotItRight={gotItRight}
        questions={quizData && quizData.questions}
      ></QuizComponent>
    </div>
  );
};

export default QuizContainer;

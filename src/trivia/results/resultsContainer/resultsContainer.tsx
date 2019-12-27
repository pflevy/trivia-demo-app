import * as React from "react";
import ResultsComponent from "../resultsComponent/resultsComponent";
import { useSelector } from "../../../redux";
import { Question } from "../../redux/reducers/quiz";
import ReviewComponent from "../reviewComponent/reviewComponent";
import Modal from "../../common/modal/modal";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/trivia";
import * as actionTypes from "../../redux/types";
import { useHistory } from "react-router-dom";

export interface ResultsContainerProps {}

const ResultsContainer: React.SFC<ResultsContainerProps> = () => {
  // Hooks
  const dispatch = useDispatch();
  const { push } = useHistory();

  // State
  const [showReviewAnswers, setShowReviewAnswer] = React.useState(false);

  // Redux state
  const quizData = useSelector(state => state.Quiz);
  const { quizAmountOfQuestions, difficulty } = useSelector(
    state => state.Trivia
  );

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

  const toggleShowReviewAnswers = () => {
    setShowReviewAnswer(!showReviewAnswers);
  };

  const handlePlayAgain = () => {
    dispatch(
      actions.beginTriviaGame({
        quizAmountOfQuestions: quizAmountOfQuestions,
        difficulty: difficulty
      })
    );
    push("/quiz");
  };

  const handleGameFinished = () => {
    dispatch({ type: actionTypes.GAME_FINISHED });
  };

  return (
    <>
      {showReviewAnswers ? (
        <Modal toggleShowModal={toggleShowReviewAnswers}>
          <ReviewComponent questions={quizData && quizData.questions} />
        </Modal>
      ) : null}
      <ResultsComponent
        quizAmountOfQuestions={quizAmountOfQuestions}
        rightAnswers={rightAnswers}
        showResults={showResults}
        toggleShowReviewAnswers={toggleShowReviewAnswers}
        handlePlayAgain={handlePlayAgain}
        handleGameFinished={handleGameFinished}
      />
    </>
  );
};

export default ResultsContainer;

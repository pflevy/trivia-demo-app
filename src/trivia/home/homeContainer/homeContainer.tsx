import * as React from "react";
import HomeComponent from "../homeComponent/homeComponent";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/trivia";
import { useSelector } from "../../../redux";
import { useHistory } from "react-router-dom";

export interface HomeContainerProps {}

const HomeContainer: React.SFC<HomeContainerProps> = () => {
  // Hooks
  const { push } = useHistory();
  const dispatch = useDispatch();

  // Redux state
  const { quizAmountOfQuestions, isPlaying, difficulty } = useSelector(
    state => state.Trivia
  );
  const beginTriviaGame = () => {
    dispatch(
      actions.beginTriviaGame({
        quizAmountOfQuestions: quizAmountOfQuestions,
        difficulty: difficulty
      })
    );
    push("/quiz");
  };

  return (
    <>
      <HomeComponent
        beginTriviaGame={beginTriviaGame}
        hasActiveGame={isPlaying}
        numberOfQuestions={quizAmountOfQuestions}
      />
    </>
  );
};

export default HomeContainer;

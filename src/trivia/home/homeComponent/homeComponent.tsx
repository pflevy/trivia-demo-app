import * as React from "react";
import BeginButton from "../../common/buttons/beginButton/beginButton";
import GenericButton from "../../common/buttons/genericButton/genericButton";
import { Link } from "react-router-dom";
import classes from "./homeComponent.module.css";

export interface HomeComponentProps {
  beginTriviaGame: Function;
  hasActiveGame: boolean;
  numberOfQuestions: number;
}

const HomeComponent: React.SFC<HomeComponentProps> = ({
  beginTriviaGame,
  hasActiveGame,
  numberOfQuestions
}) => {
  return (
    <div className={classes.homeComponent}>
      <h1>Welcome to the trivia challenge</h1>
      <h2>
        You will be presented with {numberOfQuestions} True or False questions.
      </h2>
      <h2>Can you score 100%?</h2>

      <div>
        <BeginButton onClick={() => beginTriviaGame()}>Begin</BeginButton>
        <br />
        {hasActiveGame ? <Link to={"/quiz"}>Continue Quiz</Link> : null}
      </div>
    </div>
  );
};

export default HomeComponent;

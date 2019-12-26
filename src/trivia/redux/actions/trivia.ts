import * as actionTypes from "../types/trivia";

import axios from "axios";
import { AppThunk } from "../../../redux";
import { Difficulty } from "../reducers/trivia";
import decodeHTMLEntities from "../../../utils/decodeHTMLEntities";

interface BeginTriviaGameProps {
  quizAmountOfQuestions: number;
  difficulty: Difficulty;
}

export const beginTriviaGame = ({
  quizAmountOfQuestions,
  difficulty
}: BeginTriviaGameProps): AppThunk => {
  return dispatch => {
    dispatch({ type: actionTypes.LOAD_GAME });
    axios
      .get(
        `https://opentdb.com/api.php?amount=${quizAmountOfQuestions}&difficulty=${difficulty}&type=boolean`
      )
      .then(res => {
        const questions = res.data.results.map((question: any) => {
          return {
            category: question.category,
            question: decodeHTMLEntities(question.question),
            correctAnswer: question.correct_answer === "True" ? true : false,
            userAnswer: undefined
          };
        });

        dispatch({
          type: actionTypes.GAME_START,
          data: {
            currentQuestionNumber: 0,
            questions: questions
          }
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: actionTypes.LOAD_GAME_ERROR });
      });
  };
};

import TriviaReducer from "./trivia";
import QuizReducer from "./quiz";
import { combineReducers } from "redux";

const triviaReducers = combineReducers({
  Trivia: TriviaReducer,
  Quiz: QuizReducer
});

export default triviaReducers;

import * as actionTypes from "../types/trivia";

export enum Difficulty {
  easy = "easy",
  medium = "medium",
  hard = "hard"
}

interface TriviaReducerState {
  isLoading: boolean;
  quizAmountOfQuestions: number;
  difficulty: Difficulty;
  isPlaying: boolean;
  showResults: boolean;
  hasGameSession: boolean;
  hasError?: boolean;
}

const inititalState = {
  isLoading: false,
  quizAmountOfQuestions: 10,
  difficulty: Difficulty.easy,
  isPlaying: false,
  showResults: false,
  hasGameSession: false
};

const TriviaReducer = (
  state: TriviaReducerState = inititalState,
  action: any
) => {
  switch (action.type) {
    case actionTypes.LOAD_GAME:
      return { ...state, isLoading: true };
    case actionTypes.GAME_START:
      return {
        ...state,
        isLoading: false,
        isPlaying: true,
        hasGameSession: true
      };
    case actionTypes.LOAD_GAME_ERROR:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};

export default TriviaReducer;

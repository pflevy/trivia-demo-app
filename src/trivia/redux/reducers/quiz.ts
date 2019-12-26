import * as actionTypes from "../types/quiz";

export interface Question {
  category: string;
  question: string;
  correctAnswer: boolean;
  userAnswer: boolean;
}

interface QuizReducerState {
  currentQuestionNumber: number;
  questions: Array<Question>;
}

const QuizReducer = (state: QuizReducerState | null = null, action: any) => {
  switch (action.type) {
    case actionTypes.GAME_START:
      return { currentQuestionNumber: 0, questions: action.data.questions };

    case actionTypes.USER_ANSWERED:
      const updatedQuestions = [...state!.questions];
      updatedQuestions[state!.currentQuestionNumber] = {
        ...updatedQuestions[state!.currentQuestionNumber],
        userAnswer: action.value
      };
      return { ...state, questions: updatedQuestions };

    case actionTypes.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionNumber: state!.currentQuestionNumber + 1
      };
    default:
      return state;
  }
};

export default QuizReducer;

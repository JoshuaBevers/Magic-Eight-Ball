import { ACTION_SET_QnA } from "../actionTypes";

const inititalState = {
  QnA: {
    1001: {
      question: "Will 2020 set fire to the world?",

      answer: "Out look Certain",
    },

    1002: {
      question: "Are you lying?",

      answer: "undetermined.",
    },
  },
};

const questionReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_SET_QnA: {
      const { question, id } = action.payload;
      console.log(question.question);
      const question2 = question.question;
      const StateQuestion = state.question[id].question;
      console.log("Statequestion is: ", StateQuestion);

      // const StateQuestion = state.QnA[id].question;
      // console.log(StateQuestion);
      // const StateAnswer = state.QnA[id].answer;
      return {
        QnA: {
          ...state.QnA,
          [id]: { question2 },
        },
      };
    }

    default:
      return state;
  }
};

export default questionReducer;

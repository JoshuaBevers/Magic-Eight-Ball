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
      const { question, answer } = action.payload;
      const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      return {
        QnA: {
          ...state.QnA,
          [id]: { question, answer },
        },
      };
    }

    default:
      return state;
  }
};

export default questionReducer;

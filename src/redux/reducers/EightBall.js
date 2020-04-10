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
      const { question } = action.payload;
      console.log("The question is: ", question);
      const answer2 = question.answer;
      console.log("the answer is: ", answer2);
      const question2 = question.question;
      console.log("the question2 is: ", question2);
      const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      return {
        QnA: {
          ...state.QnA,
          [id]: { question2, answer2 },
        },
      };
    }

    default:
      return state;
  }
};

export default questionReducer;

import { ACTION_SET_QnA } from "./actionTypes";

export const addQnA = (question, answer) => ({
  type: ACTION_SET_QnA,
  payload: { question, answer },
});

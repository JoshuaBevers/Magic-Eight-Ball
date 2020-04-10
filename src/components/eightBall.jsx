import React from "react";
import { connect } from "react-redux";
import { addQnA } from "../redux/actions";

const EightBall = ({ QnA, addQnA }) => {
  const QnAArray = Object.keys(QnA);

  const fetchAnswer = async (question, e) => {
    e.preventDefault();
    const fetched = await fetch(
      ` https://8ball.delegator.com/magic/JSON/${question}`
    );
    console.log(fetched);
    return null;
  };

  return (
    <div>
      <>Tom Nook Here!</>
      <div>the input of question and output of answer goes here.</div>
      <div>The list of all the questions and their answers goes here.</div>
      {QnAArray.map((QnAId, index) => {
        return (
          <div key={`question-${index}`}>
            {QnA[QnAId].question}
            <div>{QnA[QnAId].answer}</div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { QnA } = state;
  return QnA;
};

export default connect(mapStateToProps, { addQnA })(EightBall);

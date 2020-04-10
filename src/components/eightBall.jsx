import React from "react";
import { connect } from "react-redux";

const EightBall = ({ QnA }) => {
  const QnAArray = Object.keys(QnA);

  return (
    <div>
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

export default connect(mapStateToProps)(EightBall);

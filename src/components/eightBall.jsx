import React from "react";
import { connect } from "react-redux";

const EightBall = ({ QnA }) => {
  const QnAArray = Object.keys(QnA);

  return (
    <div>
      <div>A historical record of previous questions:</div>
      {QnAArray.map((QnAId, index) => {
        return (
          <div key={`question-${index}`}>
            <br />
            Question: {index + 1}
            <br />
            <br />
            {QnA[QnAId].question}
            <br />
            {QnA[QnAId].answer}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { QnA } = state;
  console.log(QnA);
  return QnA;
};

export default connect(mapStateToProps)(EightBall);

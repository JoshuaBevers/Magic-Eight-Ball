import React, { Component } from "react";
import { connect } from "react-redux";
import { addQnA } from "../redux/actions";

class Question extends Component {
  state = {
    question: "",
    answer: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { question } = this.state;
    const answer = await this.getAnswer(question);

    this.props.addQnA({ question, answer: answer });
    this.setState({ question: "", answer: "" });
  };

  getAnswer = async (question) => {
    let params = encodeURIComponent(question);
    let uri = "https://8ball.delegator.com/magic/JSON/" + params;
    const data = await fetch(uri)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
    const response = data.magic.answer;
    return response;
  };

  render() {
    const { question } = this.state;
    return (
      <div>
        <input
          type="text"
          name="question"
          placeholder="Your Question"
          onChange={this.handleChange}
          value={question}
        />

        <button type="submit" onClick={this.handleSubmit}>
          Submit Question
        </button>
      </div>
    );
  }
}
export default connect(null, { addQnA })(Question);

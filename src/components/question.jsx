import React, { Component } from "react";
import { connect } from "react-redux";
import { addQnA } from "../redux/actions";

class Question extends Component {
  state = {
    question: "",
    answer: "",
  };

  handleChange = (question, e) => {
    this.setState({ quetion: question });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { question, answer } = this.state;
    this.props.addQnA({ question: question, answer });
    this.setState({ question: "", answer: "" });
  };

  render() {
    return (
      <form onClick={this.handleSubmit}>
        <input
          type="text"
          name="question"
          placeholder="Your Question"
          onChange={this.handleChange}
        />

        <button type="submit">Submit Question</button>
      </form>
    );
  }
}
export default connect(null, { addQnA })(Question);

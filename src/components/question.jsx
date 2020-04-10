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
    // answer = fetchfunction
    console.log("Submitting: ", question);
    this.props.addQnA({ question, answer: "temp answer" });
    this.setState({ question: "", answer: "" });
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

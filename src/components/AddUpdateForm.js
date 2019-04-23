import React, { Component } from "react";

import { connect } from "react-redux";
import { addWord, updateWord, getWords, cancel } from "../actions/dictActions";
import PropTypes from "prop-types";

class AddUpdateForm extends Component {
  state = {
    _id: "",
    english: "",
    german: "",
    description: "",
    valError: false
  };

  static propTypes = {
    dict: PropTypes.object,
    addWord: PropTypes.func,
    updateWord: PropTypes.func,
    getWords: PropTypes.func,
    cancel: PropTypes.func
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearfields = () => {
    this.setState({ _id: "", english: "", german: "", description: "" });
  };

  isValidWord = str => {
    return !/[^a-zäöüß,-\s]/i.test(str);
  };
  isValidInput = () => {
    return (
      this.isValidWord(this.state.english) &&
      this.isValidWord(this.state.german) &&
      this.isValidWord(this.state.description)
    );
  };

  isValid = () => {
    return this.state.english && this.state.german && this.state.description;
  };

  createWord() {
    if (!this.isValid() || !this.isValidInput()) {
      this.setState({ valError: true });
      return null;
    } else {
      // console.log("valid");
      this.setState({ valError: false });
      return {
        english: this.state.english,
        german: this.state.german,
        description: this.state.description
      };
    }
  }

  cancel = () => {
    // e.preventDefault();
    this.setState({ valError: false });
    this.clearfields();
    this.props.cancel();
    // console.log("canc");
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const newWord = this.createWord();
    if (!newWord) {
      return console.log("no submit");
    }
    // Add word or update via addapp/update action

    this.props.dict.isUpdate
      ? this.props.updateWord({ ...newWord, _id: this.state._id })
      : this.props.addWord(newWord);

    this.clearfields();
  };

  componentDidMount() {}
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    // only do something if isUpdate is true and props dont change to preven ininite loop
    if (
      this.props.dict.isUpdate &&
      this.props.dict.isUpdate !== prevProps.dict.isUpdate
    ) {
      this.setState({
        _id: this.props.dict.single_word._id,
        english: this.props.dict.single_word.english,
        german: this.props.dict.single_word.german,
        description: this.props.dict.single_word.description,
        errorForm: this.props.dict.errorForm
      });
    }
  }

  render() {
    // console.log(this.props.dict.single_word);
    // console.log(this.props.dict.errmsg);
    // console.log(this.state);
    // console.log(this.props);

    const errorMessage = this.state.valError ? (
      <div className="my-3">
        <div className="alert alert-danger">
          Please fill in all fields correctly
        </div>
      </div>
    ) : null;

    return (
      <form className="mt-3 lmargin" onSubmit={this.onSubmit}>
        {errorMessage}
        <div className="form-group row">
          <label
            htmlFor="english"
            className="col-1 col-sm-2 col-md-1 col-form-label"
          >
            english
          </label>
          <div className="col-sm-8 ">
            <input
              className="form-control"
              type="text"
              name="english"
              id="english"
              value={this.state.english}
              onChange={this.onChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="german"
            className="col-1 col-sm-2 col-md-1 col-form-label"
          >
            german
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              type="text"
              name="german"
              id="german"
              value={this.state.german}
              onChange={this.onChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="description"
            className="col-1 col-sm-2 col-md-1 col-form-label"
          >
            type
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-8">
            <button type="submit" className="btn btn-primary mb-2 mr-2">
              {this.props.dict.isUpdate ? "Update Word" : "Add Word"}
            </button>
            <button
              type="button"
              onClick={this.cancel}
              className="btn btn-warning mb-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  dict: state.dict
});

export default connect(
  mapStateToProps,
  { addWord, updateWord, getWords, cancel }
)(AddUpdateForm);

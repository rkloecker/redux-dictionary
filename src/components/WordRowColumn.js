import { connect } from "react-redux";
import PropTypes from "prop-types";
import WordColumn from "./WordColumn";
import { getWords } from "../actions/dictActions";

import React, { Component } from "react";

class WordRowColumn extends Component {
  componentDidUpdate(previousProps) {
    if (this.props.dict.isUpdate !== previousProps.dict.isUpdate) {
      this.props.getWords();
    }
  }
  render() {
    const {
      dict: { words }
    } = this.props;
    if (this.props.dict.loading) {
      return <p>App is loading</p>;
    }
    return (
      <>
        <div className="row mb-2 nogutters font-weight-bold head">
          <div className="col col-3 "> English </div>
          <div className="col col-4 "> German </div>
          <div className="col col-3 "> Type </div>
          <div className="col col-1 "> Edit </div>
          <div className="col col-1 "> Delete </div>
        </div>
        <div className="mt-2">
          {words.map(word => (
            <WordColumn word={word} key={word._id} />
          ))}
        </div>
      </>
    );
  }
}

WordRowColumn.propTypes = {
  dict: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  dict: state.dict
});

export default connect(
  mapStateToProps,
  { getWords }
)(WordRowColumn);

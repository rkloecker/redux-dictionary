import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getWord, deleteWord } from "../actions/dictActions";
// import store from "../store";

const WordColumn = ({
  word: { _id, english, german, description },
  getWord,
  deleteWord
}) => {
  return (
    <div className="row mb-2 nogutters">
      <div className="col col-3 pt-1"> {english} </div>
      <div className="col col-4 pt-1"> {german.join(",")} </div>
      <div className="col col-3 pt-1"> {description} </div>
      <div className="col col-1">
        <button
          className="btn btn-success btn-phone"
          onClick={getWord.bind(this, _id)}
        >
          <i className="far fa-sm upd-phone">&#xf044;</i>
        </button>
      </div>

      <div className="col col-1">
        <button
          className="btn btn-danger btn-phone"
          onClick={deleteWord.bind(this, _id)}
        >
          <i className="far fa-sm del-phone">&#xf2ed;</i>
        </button>
      </div>
    </div>
  );
};

WordColumn.propTypes = {
  dict: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  dict: state.dict
});

export default connect(
  mapStateToProps,
  { getWord, deleteWord }
)(WordColumn);

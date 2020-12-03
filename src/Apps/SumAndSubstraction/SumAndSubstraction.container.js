import { connect } from "react-redux";
import SumAndSubstraction from "./SumAndSubstraction";
// import {increment} from './actions/SumAndSubstraction.actions'

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(console.log("como sea"));
    },
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  console.log(stateProps, dispatchProps, ownProps);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SumAndSubstraction);

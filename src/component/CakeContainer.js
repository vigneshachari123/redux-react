import React from "react";
import { buycake } from "../actions/ActionCake";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import store from "../store/Store";
function CakeContainer(props) {
  return (
    <div>
      CakeContainer
      <h2>cake conatiner{props.numbOfCakes}</h2>
      <button onClick={props.buycake}>cake</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numbOfCakes: state.numbOfCakes,
});

const mapDispatchToProps = (dispatch) => {
  return {
    buycake: () => dispatch(buycake),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

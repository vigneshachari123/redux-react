import { BUY_CAKE } from "../actions/CakeTypes";

const initialState = {
  numbOfCakes: 10,
};

export default  function cakeReducer(state = initialState, action)  {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numbOfCakes: state.numbOfCakes +2
        // action.payload 
      };
    default:
      return state;
  }
};

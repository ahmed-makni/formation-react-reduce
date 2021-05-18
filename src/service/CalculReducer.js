const INIT_STATE = {
  num: 0,
};

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        num: state.num + action.step,
      };
    case "DECREMENT":
      return {
        ...state,
        num: state.num - action.step,
      };
  }
};

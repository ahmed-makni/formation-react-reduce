export const getCalcul = (type, state, dispatch) => {
  dispatch({
    type: type,
    step: state,
  });
};

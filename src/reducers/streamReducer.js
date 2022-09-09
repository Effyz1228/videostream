import omit from "lodash/omit";
import mapKeys from "lodash/mapKeys";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return { ...state, ...mapKeys(action.payload, "id") };
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return omit(state, action.payload);
    default:
      return state;
  }
};

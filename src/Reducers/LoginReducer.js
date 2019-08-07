import { EMAIL_CHANGED, PASSWORD_CHANGED, EMAIL_ERROR_CHANGED, PASSWORD_ERROR_CHANGED, LOGIN_INITIAL_STATE } from "../Actions/type";

const INTIAL_STATE = {
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  isLoading: false,
  authResult: ""
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, emailError: "", passwordError: "", authResult: "" };
    case EMAIL_ERROR_CHANGED:
      return { ...state, emailError: action.payload, authResult: "" };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, emailError: "", passwordError: "", authResult: "" };
    case PASSWORD_ERROR_CHANGED:
      return { ...state, passwordError: action.payload, authResult: "" };
    // case LOADING_LOGIN:
    //   console.log("loading...");
    //   return { ...state, emailError: "", passwordError: "", isLoading: true, authResult: "" };
    // case LOGIN_SUCCESS:
    //   return { ...state, authResult: action.payload, isLoading: false, email: "", password: "" };
    // case LOGIN_FAILED:
    //   return { ...state, authResult: action.payload, isLoading: false };

    // case LOGIN_INITIAL_STATE:
    //   return INTIAL_STATE;
    default:
      return state;
  }
};

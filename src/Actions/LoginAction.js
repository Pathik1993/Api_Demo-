import { EMAIL_CHANGED, PASSWORD_CHANGED, EMAIL_ERROR_CHANGED, PASSWORD_ERROR_CHANGED } from "./type";

export const emailChangeLogin = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const emailErrorChangeLogin = text => {
  return {
    type: EMAIL_ERROR_CHANGED,
    payload: text
  };
};

export const passwordChangeLogin = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const passwordErrorChangeLogin = text => {
  return {
    type: PASSWORD_ERROR_CHANGED,
    payload: text
  };
};

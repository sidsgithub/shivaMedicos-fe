export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

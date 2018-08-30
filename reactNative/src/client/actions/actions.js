import * as types from '../constants/actionTypes';

export const sendMessage = (input) => ({
  type: types.SEND_MESSAGE,
  payload: input,
})
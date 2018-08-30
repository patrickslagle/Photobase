import * as types from '../constants/actionTypes';

const initialState = {
  userInput: '',
  //throw the messages from the database into this state 
  //also need to send messages to the database
  messages: []
};

const messageReducer = (state=initialState, action) => {
  let userInput = state.userInput;
  let messages = state.messages;
  
  switch(action.type) {
    case types.SEND_MESSAGE:
      console.log('inside sendmessage reducer', action.payload);
      userInput = action.payload;
      messages.push({
        message: userInput,
        created_at: new Date().getTime(),
        user_id: 1
      })
      console.log('messages', messages);
      return {
        userInput,
        messages
      };
    default:
      return state;
  }
}

export default messageReducer;
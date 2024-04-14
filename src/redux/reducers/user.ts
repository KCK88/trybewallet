// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';

const USER_STATE = {

};

const user = (state = USER_STATE, action: AnyAction) => {
  switch (action.type) {
    case USER_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default user;

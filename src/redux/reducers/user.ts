// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';
import { EMAIL_FORM_SUBMIT } from '../actions';

const USER_STATE = {
  email: '',
};

const user = (state = USER_STATE, action: AnyAction) => {
  switch (action.type) {
    case EMAIL_FORM_SUBMIT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default user;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';

const WALLET_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = WALLET_STATE, action: AnyAction) => {
  switch (action.type) {
    case WALLET_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default wallet;

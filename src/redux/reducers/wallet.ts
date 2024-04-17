// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import {
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
  REQUEST_FAILED,
  EXPENSES_FORM_SUBIMIT } from '../actions';

const WALLET_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFetching: false,
  errorMessage: '',
};

const wallet = (state = WALLET_STATE, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
      };

    case EXPENSES_FORM_SUBIMIT:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          { ...action.payload,
            id: state.expenses.length }],

      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        currencies: Object.keys(action.payload),
        errorMessage: '',
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default wallet;

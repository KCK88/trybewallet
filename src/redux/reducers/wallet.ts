// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import {
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
  REQUEST_FAILED,
  EXPENSES_FORM_SUBIMIT,
  EXCLUDE_EXPENSE } from '../actions';
import { Expenses } from '../../types';

const WALLET_STATE = {
  currencies: [],
  expenses: [] as Expenses[],
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

    case EXCLUDE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
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

import { Dispatch } from 'redux';
import { Expense, UserData, WalletData } from '../../types';

export const EMAIL_FORM_SUBMIT = 'EMAIL_FORM_SUBMIT';
export const EXPENSES_FORM_SUBIMIT = 'EXPENSES_FORM_SUBIMIT';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const emailFormSubmit = (email: UserData) => ({
  type: EMAIL_FORM_SUBMIT,
  payload: email,
});

export const expensesFormSubmit = (expenses: Expense) => ({
  type: EXPENSES_FORM_SUBIMIT,
  payload: expenses,
});

const requestStarted = () => {
  return { type: REQUEST_STARTED };
};

const requestSuccessful = (currencies: WalletData) => {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: currencies,
  };
};

const requestFailed = (error: string) => {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
};

export const fetchCurrency = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      dispatch(requestSuccessful(data));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
};

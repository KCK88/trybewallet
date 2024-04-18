import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type UserData = {
  email: string
};

export type WalletData = {
  currencies: [],
  expenses: (Expense & { id: number })[],
  editor: boolean,
  idToEdit: number,

};

export type Expense = {
  value: string,
  description: string,
  method: string,
  tag: string,
  currency: string,
  exchangeRates: any,
};

export type GlobalState = {
  user: UserData,
  wallet: WalletData
};

export type Dispatch = ThunkDispatch<GlobalState, null, AnyAction>;

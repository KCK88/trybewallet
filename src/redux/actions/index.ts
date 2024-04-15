import { UserData } from '../../types';

export const EMAIL_FORM_SUBMIT = 'EMAIL_FORM_SUBMIT';

export const emailFormSubmit = (email: UserData) => ({
  type: EMAIL_FORM_SUBMIT,
  payload: email,
});

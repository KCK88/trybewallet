import { EmailForm } from '../../types';

export const EMAIL_FORM_SUBMIT = 'EMAIL_FORM_SUBMIT';

export const emailFormSubmit = (emailForm: EmailForm) => ({
  type: EMAIL_FORM_SUBMIT,
  payload: emailForm,
});

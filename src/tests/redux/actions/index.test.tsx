import { EMAIL_FORM_SUBMIT, REQUEST_FAILED, REQUEST_STARTED, emailFormSubmit, requestFailed, requestStarted } from '../../../redux/actions';
import { UserData } from '../../../types';

describe('Verifica a action emailFormSubmit', () => {
  test('Verifica se retornar a ação User_data correta com email', () => {
    const userData: UserData = { email: 'jose@gmail.com' };
    const expectedType = EMAIL_FORM_SUBMIT;

    const result = emailFormSubmit(userData);

    expect(result.type).toBe(expectedType);
    expect(result.payload.email).toBe(userData.email);
  });
});

describe('Verifica a action requestStarted', () => {
  test('Verifica se a Action tem o retorno correto', () => {
    const expectedType = REQUEST_STARTED;

    const result = requestStarted();

    expect(result.type).toBe(expectedType);
  });
});

describe('Verifica se a action retorna erro de requisição', () => {
  test('Verifica se a Action retorno mensagem de erro', () => {
    const expectedType = REQUEST_FAILED;
    const error = 'error';

    const result = requestFailed(error);

    expect(result.type).toBe(expectedType);
    expect(result.payload).toBe(error);
  });
});

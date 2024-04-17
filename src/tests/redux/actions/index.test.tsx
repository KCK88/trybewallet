import { EMAIL_FORM_SUBMIT, REQUEST_FAILED, REQUEST_STARTED, emailFormSubmit, requestFailed, requestStarted } from '../../../redux/actions';
import { UserData } from '../../../types';

describe('User_data', () => {
  test('Should return right User_data action with email', () => {
    const userData: UserData = { email: 'jose@gmail.com' };
    const expectedType = EMAIL_FORM_SUBMIT;

    const result = emailFormSubmit(userData);

    expect(result.type).toBe(expectedType);
    expect(result.payload.email).toBe(userData.email);
  });
});

describe('Request_data', () => {
  test('Should return right Request_data action with email', () => {
    const expectedType = REQUEST_STARTED;

    const result = requestStarted();

    expect(result.type).toBe(expectedType);
  });
});

describe('RequestFailed_data', () => {
  test('Should return right RequestFailed_data action with email', () => {
    const expectedType = REQUEST_FAILED;
    const error = 'error';

    const result = requestFailed(error);

    expect(result.type).toBe(expectedType);
    expect(result.payload).toBe(error);
  });
});

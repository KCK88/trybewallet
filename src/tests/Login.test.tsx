import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';
import store from '../redux';

describe('Testando componente Login', () => {
  test('Testa o  botão para entrar e dois campos, um para E-mail e outro para senha', async () => {
    renderWithRouterAndRedux(
      <Provider store={ store }>
        <Login />
      </Provider>,
    );

    const emailField = screen.getByTestId('email-input') as HTMLInputElement;
    await userEvent.type(emailField, 'teste@trybe.com');

    const passwordField = screen.getByTestId('password-input') as HTMLInputElement;
    await userEvent.type(passwordField, '123456');

    screen.debug(emailField);
    expect(emailField.value).toBe('teste@trybe.com');
    expect(passwordField.value).toBe('123456');
  });
});

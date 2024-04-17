import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GlobalState } from '../types';
import { expensesFormSubmit, fetchCurrency } from '../redux/actions';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  const { currencies } = useSelector((globalState: GlobalState) => (
    globalState.wallet
  ));

  const [form, setForm] = useState({
    value: '',
    description: '',
    method: 'Dinheiro',
    tag: 'Alimentação',
    currency: 'USD',
  });

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name: targetName, value } = target;
    setForm({ ...form, [targetName]: value });
  };

  const handleSubmit = (async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fetchAsks = await fetch('https://economia.awesomeapi.com.br/json/all');
    const asksData = await fetchAsks.json();
    const expense = { ...form, exchangeRates: asksData };
    setForm({
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    });
    dispatch(expensesFormSubmit(expense));
  });

  const { value, description, method, tag, currency } = form;

  return (
    <div>
      <form
        onSubmit={ handleSubmit }
      >
        <label htmlFor="number">Valor</label>
        <input
          value={ value }
          name="value"
          onChange={ handleChange }
          data-testid="value-input"
          required
        />

        <label htmlFor="text">Descrição</label>
        <input
          value={ description }
          type="text"
          name="description"
          onChange={ handleChange }
          data-testid="description-input"
          required
        />

        <select
          value={ currency }
          name="currency"
          data-testid="currency-input"
          onChange={ handleChange }
          required
        >
          {currencies.map((coin) => (
            <option key={ coin }>{coin}</option>
          ))}
        </select>

        <select
          value={ method }
          name="method"
          data-testid="method-input"
          onChange={ handleChange }
          required
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <select
          value={ tag }
          name="tag"
          data-testid="tag-input"
          onChange={ handleChange }
          required
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        <button type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;

import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function Header() {
  const state = useSelector((globalState: GlobalState) => (
    { ...globalState.user }
  ));
  console.log(state.email);
  return (
    <>
      <div>
        {' '}
        <h1>TrybeWallet</h1>
      </div>
      <div>
        <p data-testid="total-field">Total de despesas: 0</p>
        {' '}
        <p data-testid="header-currency-field"> BRL</p>
      </div>
      <div>
        <p data-testid="email-field">
          {`Email: ${state.email}`}
        </p>
      </div>
    </>
  );
}

export default Header;

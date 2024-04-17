import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function Header() {
  const { email } = useSelector((globalState: GlobalState) => (
    globalState.user
  ));
  const { expenses } = useSelector((globalState: GlobalState) => (
    globalState.wallet
  ));
  return (
    <>
      <div>
        <h1>TrybeWallet</h1>
      </div>
      <div>
        <p data-testid="total-field">
          { expenses.reduce((accumulator, currentValue) => {
            const { ask } = currentValue.exchangeRates[currentValue.currency];
            return accumulator + (Number(currentValue.value) * ask);
          }, 0).toFixed(2)}
        </p>
        <p data-testid="header-currency-field"> BRL</p>
      </div>
      <div>
        <p data-testid="email-field">
          {`Email: ${email}`}
        </p>
      </div>
    </>
  );
}

export default Header;

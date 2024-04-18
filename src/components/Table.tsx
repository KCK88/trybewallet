import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function Table() {
  const
    { expenses } = useSelector((globalState: GlobalState) => (
      globalState.wallet
    ));

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({
          id,
          value,
          description,
          tag,
          currency,
          method,
          exchangeRates,
        }) => (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{Number(value).toFixed(2)}</td>
            <td>{currency}</td>
            <td>{exchangeRates[currency].name}</td>
            <td>{(Number(value) * exchangeRates[currency].ask).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button type="button" data-testid="delete-btn">
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

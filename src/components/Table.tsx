import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../types';
import { excludeExpense } from '../redux/actions';

function Table() {
  const { expenses } = useSelector((globalState: GlobalState) => (
    globalState.wallet
  ));
  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    dispatch(excludeExpense(id));
  };

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
        {expenses.map(({ id,
          value,
          description,
          tag,
          currency,
          method,
          exchangeRates }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{Number(value).toFixed(2)}</td>
              <td>{currency}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>
                {(Number(exchangeRates[currency].ask)
              * Number(value)).toFixed(2)}
              </td>
              <td>{exchangeRates[currency].name}</td>
              <td>
                <button
                  type="button"
                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => handleClick((id)) }
                >
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

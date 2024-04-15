function WalletForm() {
  return (
    <div>
      <form
        onSubmit={ ((event) => {
          event.preventDefault();
        }) }
      >
        <label htmlFor="number" data-testid="value-input">Valor</label>
        <input type="number" name="value" />

        <label htmlFor="text" data-testid="description-input">Descrição</label>
        <input type="text" name="text" />

        <select name="select" data-testid="method-input">
          <option value="cash">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>

        <select name="select" data-testid="tag-input">
          <option value="tag-food">Alimentação</option>
          <option value="tag-leisure">Lazer</option>
          <option value="tag-work">Trabalho</option>
          <option value="tag-mobility">Transporte</option>
          <option value="tag-health">Saúde</option>
        </select>

        <button type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;

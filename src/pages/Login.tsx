import Button from '../components/Button';
import Input from '../components/Input';

function Login() {
  const handleChange = () => {

  };
  const email = '';
  const password = '';

  return (
    <div>
      <form
        onSubmit={ ((event) => {
          event.preventDefault();
        }) }
      >
        <Input
          label="Email: "
          type="email"
          onChange={ handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="Senha: "
          type="password"
          onChange={ handleChange }
          value={ password }
          name="name"
          required
        />
        <Button
          type="submit"
          label="Entrar"
          moreClasses="is-fullwidth is-info"
        />
      </form>
    </div>
  );
}

export default Login;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { emailFormSubmit } from '../redux/actions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name: targetName, value } = target;
    setForm({ ...form, [targetName]: value });
  };

  const { email, password } = form;

  const validateEmail = (mail: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  };

  return (
    <div>
      <form
        onSubmit={ ((event) => {
          event.preventDefault();
          dispatch(emailFormSubmit(form));
          navigate('/carteira');
        }) }
      >
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          onChange={ handleChange }
          value={ email }
          name="email"
          data-testid="email-input"
          required
        />
        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          onChange={ handleChange }
          value={ password }
          name="password"
          data-testid="password-input"
          minLength={ 6 }
          required
        />
        <button
          type="submit"
          disabled={ password.length < 6 || !validateEmail(email) }
        >
          Entrar
        </button>

      </form>
    </div>
  );
}

export default Login;

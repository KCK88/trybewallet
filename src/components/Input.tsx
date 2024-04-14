import { FormProps } from '../types';

function Input({ type, name, label, onChange, value, required = false }: FormProps) {
  return (
    <label className="label" htmlFor={ name }>
      { label }
      <div className="control">
        <input
          className="input"
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ name }
          required={ required }
        />
      </div>
    </label>
  );
}

export default Input;

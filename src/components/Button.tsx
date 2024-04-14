import { ButtonProps } from '../types';

function Button({
  label, onClick = () => {},
  type = 'button',
  moreClasses = '' }: ButtonProps) {
  return (
    <button
      className={ `button ${moreClasses}` }
      type={ type }
      onClick={ onClick }
    >
      { label }
    </button>
  );
}

export default Button;

export type FormProps = {
  type: string,
  label: string,
  value: string,
  name: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required?: boolean,
};

export type ButtonProps = {
  label: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  type: 'button' | 'submit',
  moreClasses: string,
};

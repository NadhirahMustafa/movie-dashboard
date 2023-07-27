import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add any additional props specific to your button component here
  // For example, you can add a custom CSS class or an onClick event handler.
  // In this example, we are using all the default HTMLButtonElement props.
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;

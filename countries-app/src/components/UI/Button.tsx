import './Button.scss';

function Button({ className, children }: any) {
  return <button className={className}>{children}</button>;
}

export default Button;

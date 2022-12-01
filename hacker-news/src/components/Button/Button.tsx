import "./Button.css";

type ButtonType = "primary" | "secondary" | "switch";

interface ButtonProps {
  type: ButtonType;
  theme?: string;
  onClick: (...args: unknown[]) => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  theme,
  type,
  onClick,
  children,
}) => (
  <button className={`button button--${type} ${theme}`} onClick={onClick}>
    {children}
  </button>
);
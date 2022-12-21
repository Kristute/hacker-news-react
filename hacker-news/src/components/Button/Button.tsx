type ButtonType = "primary" | "secondary";

interface ButtonProps {
  type: ButtonType;
  onClick: (...args: any[]) => void;
  children: React.ReactNode;
}

export const Button = ({ type, onClick, children }: ButtonProps) => (
  <button
    className={`button button--${type}`}
    onClick={onClick}
    // style={{ ...theme as React.CSSProperties }}
  >
    {children}
  </button>
);

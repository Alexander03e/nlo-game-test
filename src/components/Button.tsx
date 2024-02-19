interface IButtonProps {
  children: string;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button onClick={handleClick} className="button">
      {children}
    </button>
  );
};

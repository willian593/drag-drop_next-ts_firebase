type Props = {
  children: JSX.Element | JSX.Element[] | string;
  onClick: () => void;
  disable: boolean;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};

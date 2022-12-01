import { Fragment } from "react";

type Props = {
  children?: React.ReactNode;
};

const EmptyLayout = ({ children }: Props) => {
  return <Fragment>{children}</Fragment>;
};

export default EmptyLayout;

import * as React from "react";

type Props = {
  children?: React.ReactNode;
}

const EmptyLayout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default EmptyLayout;

import * as React from "react";

type Props = {
  children?: React.ReactNode;
}

const EmptyLayout = ({ children }: Props) => {
  
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

export default EmptyLayout;

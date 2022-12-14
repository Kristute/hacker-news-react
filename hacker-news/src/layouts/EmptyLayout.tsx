import { Container } from "@mui/material";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const EmptyLayout = ({ children }: Props) => {
  return <Container maxWidth={false}>{children}</Container>;
};

export default EmptyLayout;

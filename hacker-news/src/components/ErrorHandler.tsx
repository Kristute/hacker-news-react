import { Alert, AlertTitle, SxProps } from "@mui/material";

interface Props {
  message: string;
}

const ErrorHandler = ({ message }: Props) => {
  return (
    <Alert
      severity="error"
      sx={{ marginTop: "20px", marginBottom: "20px" } as SxProps}
    >
      <AlertTitle>Error:</AlertTitle>
      <pre>{message}</pre>
    </Alert>
  );
};

export default ErrorHandler;

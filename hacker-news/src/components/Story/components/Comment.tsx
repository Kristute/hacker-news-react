import { Box, Paper, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import formatDate from "../../../assets/utils/filters";
import useApiRequest from "../../../hooks/useApiRequest/useApiRequest";
import ErrorHandler from "../../ErrorHandler";

interface CommentData {
  by: string;
  text: string;
  time: number;
  kids?: [];
}

interface Props {
  item: number;
}

const Comment = ({ item }: Props) => {
  const API = `https://hacker-news.firebaseio.com/v0/item/${item}.json`;

  const { error, loading, data: comment } = useApiRequest<CommentData>(API);

  if (error) {
    return <ErrorHandler message={error.message} />;
  }

  if (loading || !comment) {
    return <div> Loading... </div>;
  }

  return (
    <Box>
      <Paper sx={{ p: 2, width: "100%", my: 1 }}>
        <Box color="inherit" sx={{ display: "flex", width: "100%", mr: 1 }}>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              flexGrow: 1,
            }}
          >
            <AccountCircleOutlinedIcon />
            <Typography variant="h6" component="span" sx={{ color: "#311b92" }}>
              {comment.by}:
            </Typography>
          </Typography>
          <Typography variant="caption" color="inherit">
            {formatDate(comment.time)}
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="inherit">
            {comment.text}
          </Typography>
        </Box>
      </Paper>
      {comment.kids?.map((kid: number) => (
        <Box key={kid} sx={{ pl: "20px" }}>
          <Comment key={kid} item={kid} />
        </Box>
      ))}
    </Box>
  );
};

export default Comment;

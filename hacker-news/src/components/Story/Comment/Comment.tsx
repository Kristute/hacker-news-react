import { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import formatDate from "../../../assets/utils/filters";

interface Item {
  by: string;
  text: string;
  time: number;
}

interface Props {
  item: number;
}

interface State {
  loading: boolean;
  comment?: Item;
}

const Comment: React.FC<Props> = ({ item }) => {
  const [state, setState] = useState<State>({ loading: true });

  useEffect(() => {
    requestComments();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestComments() {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
    );
    const commentFromResponse = await res.json();
    setState({ loading: false, comment: commentFromResponse });
  }

  const { loading, comment } = state;

  if (loading) {
    return (
      <Typography variant="h6" component="div">
        loading …
      </Typography>
    );
  }

  return (
    <div>
      {comment?.by ? (
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
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#311b92" }}
              >
                {comment?.by}:
              </Typography>
            </Typography>
            <Typography variant="caption" color="inherit">
              {comment ? formatDate(comment.time) : ""}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="inherit">
              {comment?.text}
            </Typography>
          </Box>
        </Paper>
      ) : null}
      {/* TODO: adjust kids (subcomments) */}
      {/* <Typography variant="body2">
             Kids :{kids} <br />
             {parent}
           </Typography> */}
    </div>
  );
};

export default Comment;

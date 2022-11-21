import { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import formatDate from "../assets/utils/filters";

const Comment = ({ item }) => {
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    requestComments();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestComments() {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
    );
    const json = await res.json();
    setState(Object.assign({ loading: false }, json));
  }

  if (state.loading) {
    return (
      <Typography variant="h6" component="div">
        loading …
      </Typography>
    );
  }

  const { by, text, time } = state;

  return (
    <div>
      {by ? (
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
                {by}:
              </Typography>
            </Typography>
            <Typography variant="caption" color="inherit">
              {formatDate(time)}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="inherit">
              {text}
            </Typography>
          </Box>
        </Paper>
      ) : null}
      {/* TODO: adjust kids */}
      {/* <Typography variant="body2">
             Kids :{kids} <br />
             {parent}
           </Typography> */}
    </div>
  );
};

export default Comment;

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Box, Paper, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import formatDate from "../../../assets/utils/filters";
// import useApiRequest from "../../../hooks/useApiRequest/useApiRequest";
import ErrorHandler from "../../ErrorHandler";

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

const Comment = ({ item }: Props) => {
  const API = `https://hacker-news.firebaseio.com/v0/item/${item}.json`

  const [state, setState] = useState<State>({ loading: true });
  // const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error>();

  const loadData = useCallback(async () => {
      axios
      .get(API)
      .then(response => {
        // setIsLoaded(true);
        setState({ loading: false, comment: response.data });

        // setData(response.data);
      })
      .catch(error => {
        setError(error);
      });
      
  }, [API]);

  useEffect(() => {
      loadData();
  }, [API, loadData]);
  const { loading, comment } = state;

  // return { error, isLoaded, data };

  if (comment === undefined) {
    return null;
  }
  if (error) {
    return (
      <ErrorHandler message={error.message} />
    );
  } else if (loading) {
    return <div> Loading... </div>;
  } else {
    return (
      <div>
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
        {/* TODO: adjust kids (subcomments) */}
        {/* <Typography variant="body2">
              Kids :{kids} <br />
              {parent}
            </Typography> */}
      </div>
    );
  }
};

export default Comment;

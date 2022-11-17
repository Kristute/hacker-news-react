import { Component } from "react";
import { Box, Paper, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import formatDate from "../assets/utils/filters";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${this.props.item}.json?print=pretty`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json));
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const { by, text, time } = this.state;

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

        {/* <Typography variant="body2">
             Kids :{kids} <br />
             {parent}
           </Typography> */}
      </div>
    );
  }
}

const Comment = (props) => {
  const item = props.item;
  return <Details item={item} />;
};

export default Comment;

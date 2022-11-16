import { Component } from "react";
import { CardContent, Typography } from "@mui/material";

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

    const { by } = this.state;
    // const { by, key, kids, parent, text, time } = this.state;

    return (
      <div
        className="details"
        style={{ backgroundColor: "pink", marginLeft: "30px" }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {by}
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {key}
          </Typography>
          <Typography variant="body2">
            {time} <br />
            {text}
          </Typography>
          <Typography variant="body2">
            Kids :{kids} <br />
            {parent}
          </Typography> */}
        </CardContent>
      </div>
    );
  }
}

const Comment = (props) => {
  const item = props.item;
  return <Details item={item} />;
};

export default Comment;

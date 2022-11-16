import { Component } from "react";
import {
  ListItem,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import Comment from "./Comment";

class Story extends Component {
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

    const { type, title, id, by, time, score, kids, url } = this.state;

    return (
      <div className="details">
        {type === "comment" ? (
          <Comment item={this.state} />
        ) : (
          <ListItem>
            <Card sx={{ minWidth: 275 }} id={id}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {by}
                </Typography>
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {type}
                </Typography>
                <Typography variant="body2">
                  {time} <br />
                  {score}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={url}>Read More</Link>
              </CardActions>
              {kids && kids.length !== 0 ? (
                kids.map((kid) => <Comment key={kid} item={kid} />)
              ) : (
                <h3>No comments</h3>
              )}
            </Card>
          </ListItem>
        )}
      </div>
    );
  }
}

const StoryWrapper = (props) => {
  const item = props.item;
  return <Story item={item} />;
};

export default StoryWrapper;

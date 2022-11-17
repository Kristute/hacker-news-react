import { Component } from "react";
import {
  Grid,
  Card,
  CardContent,
  Link,
  Typography,
  Divider,
} from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import formatDate from "../assets/utils/filters";
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
      <Grid item xs={12} className="story" sx={{ mb: 3 }}>
        {type !== "comment" ? (
          <Card sx={{ minWidth: 275 }} id={id}>
            <CardContent style={{ borderBottom: 1 }}>
              <Typography variant="h5" component="div" sx={{ display: "flex" }}>
                <Typography component="div" sx={{ fontWeight: "bold" }}>
                  {by}
                </Typography>

                <Typography
                  sx={{ ml: 1.5 }}
                  color="text.secondary"
                  component="div"
                >
                  {type}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ ml: "auto" }}
                  color="text.secondary"
                >
                  {formatDate(time)}
                </Typography>
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {title}
              </Typography>
              <Typography component="div" sx={{ mb: 2 }}>
                <Link href={url}>Read More {">>"}</Link>
              </Typography>
              <Typography variant="body2" sx={{ display: "flex" }}>
                <Typography component="div" sx={{ borderRight: 1, pr: 2 }}>
                  <ThumbUpAltOutlinedIcon /> ({score ? score : 0})
                </Typography>
                <Typography component="div" sx={{ pl: 2 }}>
                  <ChatOutlinedIcon /> ({kids ? kids.length : 0})
                </Typography>
              </Typography>
            </CardContent>
            <div
              className="comments"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              <Divider />
              {kids && kids.length !== 0 ? (
                kids.map((kid) => <Comment key={kid} item={kid} />)
              ) : (
                <Typography variant="h7" component="div" sx={{ py: 2 }}>
                  No comments
                </Typography>
              )}
            </div>
          </Card>
        ) : null}
      </Grid>
    );
  }
}

const StoryWrapper = (props) => {
  const item = props.item;
  return <Story item={item} />;
};

export default StoryWrapper;

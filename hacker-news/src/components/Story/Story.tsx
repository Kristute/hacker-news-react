import { useState, useEffect } from "react";
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
import formatDate from "../../assets/utils/filters";
import Comment from "./Comment/Comment";

interface Item {
  type: string;
  id: string;
  by: string;
  time: number;
  title: string;
  score: string;
  url: string;
  kids: Array<number>;
}
interface Props {
  item: number,
}

interface State {
  loading: boolean;
  article?: Item
}

const Story: React.FC<Props> = ({ item }) => {
  const [state, setState] = useState<State>({ loading: true });

  useEffect(() => {
    requestStories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestStories() {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
    );
    const articleFromResponse = await res.json();
    setState({ loading: false, article: articleFromResponse })
    }
  const { loading, article } = state;

  if (loading) {
    return (
      <Typography variant="h4" component="div">
        loading …{" "}
      </Typography>
    );
  }

  return (
    <Grid item xs={12} className="story" sx={{ mb: 3 }}>
      {article?.type !== "comment" ? (
        <Card sx={{ minWidth: 275 }} id={article?.id}>
          <CardContent style={{ borderBottom: 1 }}>
            <Typography variant="h5" component="div" sx={{ display: "flex" }}>
              <Typography component="div" sx={{ fontWeight: "bold" }}>
                {article?.by}
              </Typography>

              <Typography
                sx={{ ml: 1.5 }}
                color="text.secondary"
                component="div"
              >
                {article?.type}
              </Typography>
              <Typography
                variant="body2"
                sx={{ ml: "auto" }}
                color="text.secondary"
              >
                {article ? formatDate(article.time): ''}
              </Typography>
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {article?.title}
            </Typography>
            <Typography component="div" sx={{ mb: 2 }}>
              <Link href={article?.url}>Read More {">>"}</Link>
            </Typography>
            <Typography variant="body2" sx={{ display: "flex" }}>
              <Typography component="div" sx={{ borderRight: 1, pr: 2 }}>
                <ThumbUpAltOutlinedIcon /> ({article?.score ? article?.score : 0})
              </Typography>
              <Typography component="div" sx={{ pl: 2 }}>
                <ChatOutlinedIcon /> ({article?.kids ? article?.kids.length : 0})
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
            {article?.kids && article?.kids.length !== 0 ? (
              article?.kids.map((kid): JSX.Element => <Comment key={kid} item={kid} />)
            ) : (
              <Typography variant="h6" component="div" sx={{ py: 2 }}>
                No comments
              </Typography>
            )}
          </div>
        </Card>
      ) : null}
    </Grid>
  );
};

export default Story;
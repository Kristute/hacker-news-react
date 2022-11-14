import * as React from "react";
import {
  ListItem,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import Comment from "./Comment";

const NewsList = (props) => {
  const { title, id, kids, parent, url, by, type, text, time } = props;
  // const textArea = document.getElementById("textArea");
  // How to set comments relation to stories
  return (
    <ListItem>
      {type === "comment" ? (
        <Card sx={{ minWidth: 275 }} id={id}>
          <Comment
            by={by}
            id={id}
            kids={kids}
            parent={parent}
            text={text}
            time={time}
          />
        </Card>
      ) : (
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
            <Typography variant="body2" id="textArea">
              {text}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={url}>Read More</Link>
          </CardActions>
        </Card>
      )}
    </ListItem>
  );
};

export default NewsList;

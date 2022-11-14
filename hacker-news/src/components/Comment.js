import * as React from "react";

const NewsList = (props) => {
  const { by, id, kids, parent, text, time } = props;
  return (
    <div style={{ paddingLeft: "30px" }}>
      By: {by} <br />
      id: {id} <br />
      kids: {kids} <br />
      parent: {parent} <br />
      {text} <br />
      time: {time}
    </div>
  );
};

export default NewsList;

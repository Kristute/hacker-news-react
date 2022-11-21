const formatDate = (value) => {
  const date = new Date(value);

  return date.toLocaleString(["en-US"], {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

export default formatDate;

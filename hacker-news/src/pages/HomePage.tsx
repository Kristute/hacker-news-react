import { Box, Container } from "@mui/material";
// import { default as data } from "../services/MOCK_DATA.json";
import MainLayout from "../layouts/MainLayout";
// import usePagination from "../hooks/usePagination";

import News from "../components/News/News";

const HomePage = () => {
  // let [page, setPage] = useState(1);
  // const PER_PAGE = 24;

  // const count = Math.ceil(data.length / PER_PAGE);
  // const _DATA = usePagination(data, PER_PAGE);

  // const handleChange = (e, p) => {
  //   setPage(p);
  //   _DATA.jump(p);
  // };

  return (
    <MainLayout>
      <Container maxWidth={false} className="main">
        <Box>
          <News />
        </Box>
        <Box p="5">
          {/* TODO: adjust data for pagination */}
          {/* <List p="10" pt="3" spacing={2}>
                    {_DATA.currentData().map(v => {
                      return (
                        <ListItem key={v.id} liststyletype="disc">
                          <span>{v.sku}</span>{" "}
                          <Divider display="inline" orientation="vertical" />
                          <span> {v.category_type}</span>{" "}
                          <Divider display="inline" orientation="vertical" />
                          <span>
                          </span>
                        </ListItem>
                      );
                    })}
                  </List> */}

          {/* TODO: include Pagination from MUI */}
          {/* <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          /> */}
        </Box>
      </Container>
    </MainLayout>
  );
};

export default HomePage;

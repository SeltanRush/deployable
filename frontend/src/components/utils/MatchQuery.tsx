import { CircularProgress, Typography } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { QueryObserverResult } from "react-query";

interface Props<Data> {
  query: QueryObserverResult<Data>;
  children: (data: Data) => ReactElement;
}

const MatchQuery = <Data extends unknown>(props: Props<Data>) => {
  if (props.query.isLoading) {
    return <CircularProgress />;
  }

  if (props.query.isError) {
    return <Typography color="error">{String(props.query.error)}</Typography>;
  }

  if (props.query.isSuccess) {
    return props.children(props.query.data);
  }

  return <div>{null}</div>;
};

export default MatchQuery;

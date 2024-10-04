import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetQuery = ({ url, key = "movies" }) => {
  const {
    isLoading,
    isError,
    data: query,
    isFetching,
  } = useQuery({
    queryKey: key,
    queryFn: () =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(query);
          return data;
        }),
  });
  return {
    query,
    isLoading,
    isError,
    isFetching,
  };
};

export default useGetQuery;

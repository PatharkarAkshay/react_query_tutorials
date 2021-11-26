import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

export const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isError, isLoading, error, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Pagination Queries</h2>
      {data?.data.map((color) => {
        return (
          <div key={color.id}>
            <h1>
              {color.id} - {color.label}
            </h1>
          </div>
        );
      })}

      <div>
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((page) => pageNumber - 1)}
        >
          Previous
        </button>
        <button
          disabled={pageNumber === 4}
          onClick={() => setPageNumber((page) => pageNumber + 1)}
        >
          Next
        </button>
      </div>
      {isFetching && "Loading"}
    </>
  );
};

import { useEffect, useState } from "react";

export const useFetch = (url, initState) => {
  const [data, setData] = useState(initState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((items) => {
        setIsLoading(false);
        setData(items);
      });
  }, []);

  return {
    data,
    isLoading,
  };
};

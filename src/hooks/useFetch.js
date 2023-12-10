import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });

      const resp = await fetch(url);
      const data = await resp.json();

      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      setState({
        ...setState,
        hasError: error,
      });
    }
    console.log(state.hasError);
  };

  const newQuote = () => {
    getFetch();
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    newQuote,
  };
};

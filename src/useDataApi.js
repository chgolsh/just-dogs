import { useState, useEffect, useReducer } from "react";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.received,
        isError: false,
        isLoaded: true
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isError: true,
        isLoaded: false
      };
    default:
      throw new Error();
  }
}

export default function useDataApi(initialUrl, initialData) {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(reducer, {
    isLoaded: false,
    isError: false,
    data: initialData
  });

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const result = await axios(url);
        dispatch({ type: "FETCH_SUCCESS", received: result.data });
      } catch {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    dataFetch();
  }, [url]);

  return [state, setUrl];
}

import { useState, useCallback, useEffect } from "react";
import { SUCCESS, PENDING, ERROR, IDLE } from "../constants/status";
import axios from "axios";

const useFetchedData = (alias: string) => {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >(IDLE);
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async () => {
    setStatus(PENDING);
    setError(null);

    try {
      const result = await axios.request<any>({
        url: `https://jsonplaceholder.typicode.com/${alias}`,
        method: "get",
      });
      console.log(result);
      setData(result.data);
      setStatus(SUCCESS);
    } catch (error) {
      setError(error);
      setStatus(ERROR);
    }
  }, [alias]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { status, data, error };
};

export default useFetchedData;

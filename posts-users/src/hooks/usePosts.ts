import { useState, useCallback, useEffect } from "react";
import { Post } from "../types/types";
import { SUCCESS, PENDING, ERROR, IDLE } from "../constants/status";
import axios from "axios";

const usePosts = () => {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >(IDLE);
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async () => {
    setStatus(PENDING);
    setError(null);

    try {
      const result = await axios.request<Array<Post>>({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "get",
      });
      console.log(result);
      setPosts(result.data);
      setStatus(SUCCESS);
    } catch (error) {
      setError(error);
      setStatus(ERROR);
    }
  }, []);

  useEffect(() => {
      execute();
  }, [execute])

  return { status, posts, error};
};

export default usePosts;

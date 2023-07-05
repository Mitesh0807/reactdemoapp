import { ReactNode, useEffect } from "react";
import Card from "../ui/Card";
import { useState } from "react";
import React from "react";
import Posts from "./Posts";
import ShimmerCards from "./ShimmerCards";

export interface PostI {
  id: string;
  userId: string;
  body: string;
  title: string;
}

function ListOfCard(props: {
  img: string | undefined;
  title: ReactNode;
  summary: ReactNode;
}) {
  // const [test, setTest] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const [post, setPosts] = useState<PostI[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const data = await asyncData();
      setPosts(data);
      setIsLoading(false);
      setCount(count + data?.length);
    }
    fetchData();
  }, []);
  async function asyncData() {
    await new Promise((resolve) => setTimeout(resolve, 20000)); // 3 sec

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }

  return (
    <Card>
      <div>
        <img
          className="concept"
          style={{ height: "15rem", width: "15rem" }}
          src={props.img}
          alt="key s"
        />
        <h1>{props.title}</h1>
        <p className="btn" style={{ opacity: 0.5 }}>
          {props.summary}
        </p>
        <p style={{ opacity: 0.5 }}>{count}</p>
        {isLoading ? <ShimmerCards /> : <Posts posts={post} />}
      </div>
    </Card>
  );
}
export default React.memo(ListOfCard);

import { ReactNode, useEffect } from "react";
import Card from "../ui/Card";
import { useState } from "react";
import React from "react";
import Posts from "./Posts";

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
  useEffect(() => {
    async function fetchData() {
      const data = await asyncData();
      setPosts(data);
      setCount(count + data?.length);
    }
    fetchData();
  }, []);
  console.log(useState());

  // const handleLearnMoreClick = () => {
  //   setTest([...test, "Learn More"]);
  // };

  async function asyncData() {
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
        <Posts posts={post} />
      </div>
    </Card>
  );
}
export default React.memo(ListOfCard);

import { ReactNode, useEffect } from "react";
import Card from "../ui/Card";
import { useState } from "react";
import React from "react";

function ListOfCard(props: {
  img: string | undefined;
  title: ReactNode;
  summary: ReactNode;
}) {
  const [test, setTest] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const data = await asyncData();
      setCount(count + data?.length);
    }
    fetchData();
  }, []);
  console.log("child triggerd");

  const handleLearnMoreClick = () => {
    setTest([...test, "Learn More"]);
  };

  async function asyncData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }

  return (
    <Card>
      <img
        className="concept"
        style={{ height: "15rem", width: "15rem" }}
        src={props.img}
        alt="key s"
      />
      <h1 className="">{props.title}</h1>
      <p className="" style={{ opacity: 0.5 }}>
        {props.summary}
      </p>
      <button onClick={handleLearnMoreClick}>Learn More</button>
      <p style={{ opacity: 0.5 }}>{count}</p>
    </Card>
  );
}
export default React.memo(ListOfCard);

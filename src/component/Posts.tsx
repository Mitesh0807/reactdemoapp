import { memo } from "react";
import { PostI } from "./listofcard";

function Posts(props: any) {
  console.log(props);
  return (
    <>
      <div>
        {props.posts
          ? props.posts.map((a: PostI, index: number) => {
              if (index > 9) return null;
              return (
                <div className="btn" key={index}>
                  <h3>{a.id}</h3>
                  <h4>{a.title}</h4>
                  <p style={{ opacity: 0.5 }}>{a.body}</p>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
export default memo(Posts);

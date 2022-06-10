import React from "react";
import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: 123,
      username: "ssssangha",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "HELLO WORLD",
    },

    {
      id: 456,
      username: "ssssangha",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "HELLO WORLD",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;

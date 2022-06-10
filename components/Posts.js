import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  //   const posts = [
  //     {
  //       id: 123,
  //       username: "ssssangha",
  //       userImg: "https://links.papareact.com/3ke",
  //       img: "https://links.papareact.com/3ke",
  //       caption: "HELLO WORLD",
  //     },

  //     {
  //       id: 456,
  //       username: "ssssangha",
  //       userImg: "https://links.papareact.com/3ke",
  //       img: "https://links.papareact.com/3ke",
  //       caption: "HELLO WORLD",
  //     },
  //   ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [db]);

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;

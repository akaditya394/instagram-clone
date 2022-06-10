import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartFilledIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";

function Post(props) {
  const { data: session } = useSession();
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1
        mr-3"
          src={props.userImg}
          alt="pic"
        />
        <p className="flex-1 font-bold">{props.username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img className="object-cover w-full" src={props.img} alt="upload" />

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{props.username}</span> {props.caption}
      </p>

      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button className="font-semibold text-blue-400">Post</button>
        </form>
      )}
    </div>
  );
}

export default Post;

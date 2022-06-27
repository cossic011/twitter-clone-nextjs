import { SparklesIcon } from "@heroicons/react/outline";
import React from "react";
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Mirko Cosic",
      username: "codewithmirko",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsyVVdxkz5zyuE-yRKpdwtre_R234HkS2gQ&usqp=CAU",
      postImg:
        "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg",
      text: "Nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Mirko Cosic",
      username: "codewithmirko",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsyVVdxkz5zyuE-yRKpdwtre_R234HkS2gQ&usqp=CAU",
      postImg:
        "https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876_960_720.jpg",
      text: "Wow!",
      timestamp: "2 days ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;

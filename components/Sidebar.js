import React from "react";
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      <div className="hoverEffect flex items-center justify-center p-0 hover:bf-blue-100 p-1">
        <Image
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          width={50}
          height={50}
          alt="Logo"
        />
      </div>

      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="List" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold text-lg shadow-md hover:brightness-95 hidden xl:inline">
        Tweet
      </button>

      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          className="h-10 w-10 rounded-full xl:mr-2"
          src="https://www.adscientificindex.com/pictures/0b/50734.jpg"
          alt="User Image"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Mirko Cosic</h4>
          <p className="text-gray-500">@codewithmirko</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;

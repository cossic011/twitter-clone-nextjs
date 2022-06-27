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
import { useSession, signIn, signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-20">
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
        {session && (
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="List" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>
        )}
      </div>
      {session ? (
        <>
          <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold text-lg shadow-md hover:brightness-95 hidden xl:inline">
            Tweet
          </button>

          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
              className="h-10 w-10 rounded-full xl:mr-2"
              src={session.user.image}
              alt="User Image"
              onClick={signOut}
            />
            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">{session.user.name}</h4>
              <p className="text-gray-500">@{session.user.username}</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
          </div>
        </>
      ) : (
        <button
          className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold text-lg shadow-md hover:brightness-95 hidden xl:inline"
          onClick={signIn}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Sidebar;

import React from "react";
import ChatCards from "../Components/ChatCards";
import Search from "../Components/Search";

const ChatRooms = () => {
  return (
    <div className="max-w-5xl mx-auto m-10">
      <Search />
      <div className="p-4">
        <button
          type="button"
          class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Text Rooms
        </button>
        <button
          type="button"
          class="px-3 mx-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Audio Rooms
        </button>
      </div>
      <div className="grid grid-cols-3">
        <ChatCards />
        <ChatCards />
        <ChatCards />
        <ChatCards />
        <ChatCards />
        <ChatCards /> <ChatCards />
        <ChatCards />
        <ChatCards /> <ChatCards />
        <ChatCards />
        <ChatCards />
      </div>
    </div>
  );
};

export default ChatRooms;

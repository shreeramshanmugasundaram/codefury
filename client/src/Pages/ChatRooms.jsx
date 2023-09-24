import React, { useEffect, useState } from "react";
import ChatCards from "../Components/ChatCards";
import Search from "../Components/Search";
import { getRooms } from "../actions/getRooms";
const ChatRooms = () => {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    getRooms(setRooms);
    console.log(rooms);
  }, [rooms]);
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
        {rooms?.map((room) => {
          return <ChatCards room={room} />;
        })}
      </div>
    </div>
  );
};

export default ChatRooms;

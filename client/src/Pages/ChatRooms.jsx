import React from "react";
import ChatCards from "../Components/ChatCards";
import Search from "../Components/Search";

const ChatRooms = () => {
  return (
    <div className="max-w-5xl mx-auto m-10">
      <Search />
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

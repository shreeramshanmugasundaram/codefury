import React from "react";

const ChatCards = () => {
  return (
    <div className=" p-4 bg-slate-900 mx-2 my-2 text-cyan-200 rounded-md">
      <div className="text-lg py-2">
        <img
          className="w-10 h-10 inline-block mx-2"
          src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
          alt=""
        />
        Dancing Rasta
      </div>
      {/* <div className="text-sm mt-2 text-right">By Shreeram</div> */}
      <div className=" flex justify-end mt-16">
        <button class="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default ChatCards;

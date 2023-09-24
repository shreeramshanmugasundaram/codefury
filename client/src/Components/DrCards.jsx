import React from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const DrCards = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-slate-100 rounded-md m-2">
      <div>
        <img
          src="https://media.istockphoto.com/id/1373259633/photo/portrait-of-successful-nurse-with-team.jpg?s=2048x2048&w=is&k=20&c=K2Tg1k4F0i63uCzsxA9EY1TGhayzUN6P06u5aBQJ7Gc="
          alt=""
        />
        <div>Name : {data.name}</div>
        <div>Degress : {data.Des}</div>
        <div className=" flex justify-end mt-2">
          <button
            onClick={() => {
              toast.success("Let me connect you to ", data.name);
            }}
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Connect
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default DrCards;

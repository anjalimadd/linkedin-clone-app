import { Avatar } from "@mui/material";
import React from "react";

function Sidebar() {
  const recentItems = (topic) => (
    <div className="flex text-xs text-gray-500 font-bold cursor-pointer mb-1.5 p-1.5 hover:bg-gray-100 hover:rounded-lg hover:text-black">
      <span className="mr-2.5 ml-2.5"> # </span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="flex flex-col sticky top-0 h-screen w-[20vw] p-0">
      <div
        className="flex flex-col items-center bg-white"
        style={{
          border: "1px solid lightgray",
          borderBottom: "1px solid lightgray",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <img
          className="w-full object-cover mb-[-20px] h-[60px] rounded-t-lg"
          src="https://images.unsplash.com/photo-1560345573-9f453083c335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
          alt="cover pics"
        />
        <Avatar className="mb-2.5" />
        <h2 className="text-xl">Anjali Maddeshiya</h2>
        <h4 className="text-gray-500 text-xs mb-2.5">
          anjalimaddheshiya99@gmail.com
        </h4>
      </div>

      <div
        className="p-2.5 mb-2.5 bg-white"
        style={{
          border: "1px solid lightgray",
          borderTop: "none",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <div className="mt-2.5 flex justify-between">
          <p>Who viewed you</p>
          <p
            className="text-gray-600 text-xs font-semibold"
            style={{ color: "#0a66c2", fontSize: "12px", fontWeight: 600 }}
          >
            2,432
          </p>
        </div>
        <div className="mt-2.5 flex justify-between">
          <p>Views on post</p>
          <p
            className="text-gray-600"
            style={{ fontSize: "12px", fontWeight: 600, color: "#0a66c2" }}
          >
            12,232
          </p>
        </div>
      </div>

      <div
        className="text-left p-2.5 border border-light-gray bg-white rounded-lg mt-2.5"
        style={{
          borderColor: "lightgray",
        }}
      >
        <p
          className="pb-2.5"
          style={{
            fontSize: "13px",
          }}
        >
          Recent
        </p>
        {recentItems("reactjs")}
        {recentItems("JavaScript")}
        {recentItems("Ruby")}
        {recentItems("Ruby on Rails")}
      </div>
    </div>
  );
}

export default Sidebar;

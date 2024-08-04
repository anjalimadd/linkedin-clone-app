import React from "react";
import InputOption from "./InputOption";
import { Avatar } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Post({ name, description, message, id, photoUrl }) {
  return (
    <div className="bg-white p-3.75 mb-2.5 rounded-lg">
      <div className="flex ml-2.5 mt-2.5 mb-2.5">
        <Avatar src={photoUrl} />
        <div className="ml-2.5">
          <h2 className="text-base">{name}</h2>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>

      <div className="ml-5 mt-3 mb-2.5">
        <p>{message}</p>
      </div>
      <div className="flex justify-evenly">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;

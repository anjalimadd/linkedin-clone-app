import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

   useEffect(() => {
     const postsCollection = collection(db, "posts");
     const q = query(postsCollection, orderBy("timestamp", "desc"));
     const unsubscribe = onSnapshot(q, (snapshot) => {
       setPosts(
         snapshot.docs.map((doc) => ({
           id: doc.id,
           data: doc.data(),
         }))
       );
     });

     return () => unsubscribe();
   }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      name: "sony sangha",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: new Date(),
    });

    setInput("");
  };

  return (
    <div className="flex flex-col w-[60vw] mx-5 my-0">
      <div className="bg-white p-2.5 pb-5 rounded-lg mb-5">
        <div className="border border-light-gray rounded-full flex p-2.5 pl-3.75 text-gray-500">
          <CreateIcon />
          <form className="flex w-full" onSubmit={sendPost}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border-none flex-1 ml-2.5 outline-none font-semibold"
              type="text"
            />
            <button className="hidden" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="flex justify-evenly mt-3.75">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;

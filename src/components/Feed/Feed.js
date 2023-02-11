import React from "react";
import FeedList from "./FeedList";
import Sidebar from "../Sidebar/Sidebar";
// import AddPost from "../Post/AddPost";

const Feed = ({ user }) => {
  return (
    <>
      {/* <AddPost /> */}
      <Sidebar />
      <FeedList user={user} />
    </>
  );
};

export default Feed;

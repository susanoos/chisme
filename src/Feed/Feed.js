import React from "react";
import FeedList from "./FeedList";
// import AddPost from "../Post/AddPost";

const Feed = ({ user }) => {
  return (
    <>
      {/* <AddPost /> */}
      <FeedList user={user} />
    </>
  );
};

export default Feed;

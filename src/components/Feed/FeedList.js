import React, { Fragment, useState } from "react";
import classes from "./FeedList.module.css";
import ProfileImg from "../Profile/ProfileImg";
import Card from "../UI/Card";
import AddPost from "../Post/AddPost";

const DUMMY_FEED = [
  {
    id: 1,
    username: "esxbar",
    post: "hello I am first",
    date: "Feb 8",
  },
  {
    id: 2,
    username: "sxles",
    post: "hello I am new here",
    date: "Feb 8",
  },
  {
    id: 3,
    username: "avxd",
    post: "cool site",
    date: "Feb 9",
  },
];

const FeedList = ({ user }) => {
  const [feedList, setFeed] = useState(DUMMY_FEED);

  const postToFeed = (newPost) =>
    setFeed((prevFeed) => [
      ...prevFeed,
      { id: Math.random() + 5, username: user, post: newPost, date: "Feb 10" },
    ]);

  const feedHome = feedList.map((feed) => {
    return (
      <Fragment key={feed.id}>
        <Card>
          <div className={classes.feed}>
            <div className={classes.user__info}>
              <ProfileImg />
              <h1 className={classes.user}>@{feed.username}</h1>
              <span className={classes.date}>{feed.date}</span>
            </div>
            <p className={classes.post}>{feed.post}</p>
          </div>
        </Card>
      </Fragment>
    );
  });
  return (
    <>
      <AddPost onPost={postToFeed} />
      <section className={classes.feed__list}>{feedHome}</section>
    </>
  );
};

export default FeedList;

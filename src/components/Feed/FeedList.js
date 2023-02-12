import React, { Fragment, useState } from "react";
import classes from "./FeedList.module.css";
import ProfileImg from "../Profile/ProfileImg";
import Card from "../UI/Card";
import AddPost from "../Post/AddPost";
import { DUMMY_FEED_DATA } from "../../dummy-data";

const FeedList = ({ user }) => {
  const [feedList, setFeed] = useState(DUMMY_FEED_DATA);

  const postToFeed = (newPost) =>
    setFeed((prevFeed) => [
      ...prevFeed,
      { id: Math.random() + 25, username: user, post: newPost, date: "Feb 10" },
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

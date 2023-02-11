import React, { Fragment, useState } from "react";
import classes from "./FeedList.module.css";
import Card from "../UI/Card";
import AddPost from "../Post/AddPost";

const DUMMY_FEED = [
  {
    id: 1,
    username: "david",
    post: "hello I love my wife",
    date: "Feb 9",
  },
  {
    id: 2,
    username: "mariah",
    post: "hello I love my papi chulo",
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

  // console.log(getUser);
  // console.log(feedList);

  const feedHome = feedList.map((feed) => {
    return (
      <Fragment key={feed.id}>
        <Card>
          <div className={classes.feed}>
            <div className={classes.user__info}>
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

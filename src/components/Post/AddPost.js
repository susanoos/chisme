import React, { useState } from "react";
import classes from "./AddPost.module.css";

const AddPost = ({ onPost }) => {
  const [post, setPost] = useState("");
  const postChangeHandler = (e) => {
    setPost(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPost("");
    onPost(post);
  };
  return (
    <>
      <form className={classes.add__post__form} onSubmit={submitHandler}>
        <textarea
          className={classes.post__form}
          id="post"
          name="post"
          placeholder="Spill the tea..."
          rows="4"
          cols="40"
          value={post}
          onChange={postChangeHandler}
        />

        <button className={classes.add__post__button}>Spill</button>
      </form>
    </>
  );
};

export default AddPost;

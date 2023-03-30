/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Comment from "../../components/Comment/index";

export default {
  title: "components|Comment",
  component: Comment,
};

export const comment = () => {
  return <Comment commentId={0} contant={""} isMine={false} name={""} />;
};

export const primaryComment = () => {
  return (
    <Comment commentId={1} contant={"좋아요"} isMine={true} name={"유환빈"} />
  );
};

import React from "react";
import CommentBox from "./CommentBox";
const data = [
  {
    username: "Anand Pawar",
    comment: "Lorem ipsum, dolor sit amet",
    replies: [
      {
        username: "Anu",
        comment:
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam delectus eligendi fugit voluptatem unde odio quo a ut repellendus blanditiis!",
        replies: [
          {
            username: "Anu",
            comment:
              " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam delectus eligendi fugit voluptatem unde odio quo a ut repellendus blanditiis!",
          },
        ],
      },
    ],
  },
  {
    username: "Alka ",
    comment: "Lorem ipsum, dolor sit amet",
    replies: [
      {
        username: "Anu",
        comment: " Lorem ipsum, dolor sit amet c",
        replies: [
          {
            username: "Prashant",
            comment:
              " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam delectus eligendi fugit voluptatem unde odio quo a ut repellendus blanditiis!",
          },
          { username: "Dhoni ", comment: "Lorem ipsum, dolor sit amet" },
          {
            username: "Kohli ",
            comment: "Lorem ipsum, dolor sit amet",
            replies: [
              {
                username: "Anu",
                comment: " Lorem ipsum, dolor sit amet c",
                replies: [
                  {
                    username: "Prashant",
                    comment:
                      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam delectus eligendi fugit voluptatem unde odio quo a ut repellendus blanditiis!",
                  },
                  {
                    username: "Dhoni ",
                    comment: "Lorem ipsum, dolor sit amet",
                  },
                  {
                    username: "Kohli ",
                    comment: "Lorem ipsum, dolor sit amet",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { username: "Deepanshu ", comment: "Lorem ipsum, dolor sit amet" },
  { username: "Vivaan ", comment: "Lorem ipsum, dolor sit amet" },
];
const Comments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comments;

import React from "react";

const CommentBox = ({ data }) => {
  return (
    <div>
      {data.map((comment, index) => (
        <div className="pl-10 border-l-2 border-black" key={index}>
          <div className="flex">
            <div>
              <img
                className="w-12 h-12 p-2rounded-full"
                src="https://i.redd.it/snoovatar/avatars/acfc57cc-95d5-4ae6-b048-9fe5ec516653.png"
                alt="user"
              />
            </div>
            <div>
              <p className="font-bold px-1">{comment.username}</p>
              <p className="px-2">{comment.comment}</p>
            </div>
          </div>
          <div>{comment.replies && <CommentBox data={comment.replies} />}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;

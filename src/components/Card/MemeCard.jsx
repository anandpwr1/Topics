import React from "react";

const MemeCard = ({ data }) => {
  // console.log(data);
  const { url, author } = data;

  return (
    <div className="p-5 m-5 border border-black rounded-lg">
      <img className="w-64 h-64" src={url} alt="meme" />
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;

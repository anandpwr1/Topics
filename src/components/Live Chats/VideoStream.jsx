import React from "react";

const VideoStream = () => {
  return (
    <div className="m-5">
      <iframe
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/P857H4ej-MQ?si=5YIveAcARZ0auv6l"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoStream;

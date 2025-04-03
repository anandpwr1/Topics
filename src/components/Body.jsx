import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchMemes = async () => {
    setShowShimmer(true);

    const res = await fetch("https://meme-api.com/gimme/20");
    const data = await res.json();
    setShowShimmer(false);
    setMemes((meme) => [...meme, ...data.memes]);
  };

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  return (
    <div className="flex flex-wrap">
      {memes.map((meme, index) => (
        <MemeCard key={index} data={meme} />
      ))}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;

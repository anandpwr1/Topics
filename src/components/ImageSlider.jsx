import React, { useEffect, useState } from "react";
const images = [
  "https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=2048x2048&w=is&k=20&c=S3Zow4qlkOvWySLGoM4MCERydeHBxRbQUjnSKH2vbNY=",
  "https://media.istockphoto.com/id/92269080/photo/journey.jpg?s=2048x2048&w=is&k=20&c=8eh8FRUcsGYOjNxbUjl4jnuJ7lnNOQYbfWAXIJx7afw=",
  "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/11/28/16/27/nature-6830717_1280.jpg",
];

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      loadNextImage();
    }, 1500);

    return clearInterval(interval);
  }, []);
  const loadPrevImage = () => {
    setActiveImage((active) => (active + 1) % images.length);
  };

  const loadNextImage = () => {
    setActiveImage((active) =>
      active - 1 < 0 ? images.length - 1 : active - 1
    );
  };

  return (
    <>
      <div>
        <div className="p-2 m-2 flex justify-center items-center">
          <div className="relative">
            <img
              onClick={loadPrevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-16 h-16 cursor-pointer bg-white bg-opacity-50 rounded-full p-2"
              src="https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
              alt="leftarrow"
            />
            <img
              className="w-[800px]"
              src={images[activeImage]}
              alt="wallpaper"
            />
            <img
              onClick={loadNextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-16 h-16 cursor-pointer bg-white  rounded-full p-2"
              src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
              alt="rigth arrow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;

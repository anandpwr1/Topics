import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
const data = [
  {
    title: "Accordian 1",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum reprehenderit id suscipit, repellat voluptate officia eum? Excepturi id, molestiae eos asperiores cumque iste? Quae architecto accusantium, veritatis exercitationem pariatur numquam impedit explicabo debitis ratione officia laboriosam voluptates necessitatibus quos voluptatum totam magni fugit culpa tenetur fugiat quibusdam laborum animi? Dolores.",
  },
  {
    title: "Accordian 2",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum reprehenderit id suscipit, repellat voluptate officia eum? Excepturi id, molestiae eos asperiores cumque iste? Quae architecto accusantium, veritatis exercitationem pariatur numquam impedit explicabo debitis ratione officia laboriosam voluptates necessitatibus quos voluptatum totam magni fugit culpa tenetur fugiat quibusdam laborum animi? Dolores.",
  },
  {
    title: "Accordian 3",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum reprehenderit id suscipit, repellat voluptate officia eum? Excepturi id, molestiae eos asperiores cumque iste? Quae architecto accusantium, veritatis exercitationem pariatur numquam impedit explicabo debitis ratione officia laboriosam voluptates necessitatibus quos voluptatum totam magni fugit culpa tenetur fugiat quibusdam laborum animi? Dolores.",
  },
];
const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="w-[50%] mt-5 m-auto">
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={index === openIndex}
          setIsOpen={() => {
            //one should open rest shouldclose
            index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default Accordian;

import React from "react";

const AccordianItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="border border-black ">
      <div
        className="font-bold  p-2 bg-slate-200 flex justify-between"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span>{title}</span>
        <span>⬇️</span>
      </div>
      {isOpen && <div className="p-3">{body}</div>}
    </div>
  );
};

export default AccordianItem;

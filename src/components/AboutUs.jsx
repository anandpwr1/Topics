import React from "react";
import { LANG } from "../constants/langConstant";

const AboutUs = ({ lang }) => {
  console.log(lang);
  const data = LANG[lang];
  //Config Driven UI
  return (
    <div>
      <h1 className="font-bold text-2xl"> {data.title1}</h1>
      <p className="py-5">{data.des}</p>
      <h1 className="font-bold text-2xl"> {data.title2}</h1>
      <p className="py-5">{data.des} </p>
      <h1 className="font-bold text-2xl"> {data.title3}</h1>
      <p className="py-5">{data.des}</p>
      <h1 className="font-bold text-2xl"> {data.title4}</h1>
      <p className="py-5">{data.des}</p>
    </div>
  );
};

export default AboutUs;

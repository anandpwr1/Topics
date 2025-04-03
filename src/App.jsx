import React, { useState } from "react";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./components/Login";
import Accordian from "./components/Accordian";
import Comments from "./components/Comments";
import ImageSlider from "./components/ImageSlider";
import Pagination from "./components/Pagination";

const App = () => {
  const [lang, setLang] = useState("en");
  return (
    <>
      <header className="text-2xl font-bold m-5 p-5 bg-black text-white flex justify-between items-center">
        <h1>Meme Page</h1>
        <nav className="p-2 m-2  space-x-5">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/team">Team</a>
          <a href="/login"> Login</a>
          <a href="/accordian">Accordian</a>
          <a href="/nestedComments">Comments</a>
          <a href="/imageSlider">Image Slider</a>
          <a href="/pagination">Pagination</a>
        </nav>
        <select
          className="text-gray-500"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en"> English</option>
          <option value="hi"> Hindi</option>
        </select>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/about" element={<AboutUs lang={lang} />}></Route>
            <Route path="/team" element={<Team />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/accordian" element={<Accordian />}></Route>
          <Route path="/nestedComments" element={<Comments />}></Route>
          <Route path="/imageSlider" element={<ImageSlider />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

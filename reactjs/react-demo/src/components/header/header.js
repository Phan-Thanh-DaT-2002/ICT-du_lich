
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <span onClick={() => handleNavigate("/post/1")}>Post Detail</span>
          </li>
          <li>
            <span onClick={() => handleNavigate("/")}>Home</span>
          </li>
          <li>
            <span onClick={() => handleNavigate("/about-us")}>About us</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
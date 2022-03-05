import { useState } from "react";
import "./PhotoCarosal.css";

const PhotoCarosal = (props) => {
  const arr = props.arr;
  const height = props.height;
  const width = props.width;
  let currentIndex = 0;

  const changePhoto = () => {
    setInterval(() => {
      if (currentIndex === arr.length) {
        return arr[0];
      }
    });
  };
  return <h1>Hello World</h1>;
};

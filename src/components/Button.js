import React from "react";

const Button = () => {
  let imageOffset = 0;
  let clickCounter = 0;
  console.log(clickCounter + "clickcounter");
  console.log(imageOffset);

  const images = document.querySelectorAll(
    "#root > div > div > div.about > div.about__img > img"
  );
  console.log(images);
  const clickRight = () => {
    if (clickCounter < 2) {
      imageOffset -= 550;
      clickCounter++;
      console.log(imageOffset);
      console.log(clickCounter + "clickCounter");
      console.log(images.length);
      images.forEach((image) => {
        image.style.transform = `translateX(${imageOffset}px)`;
      });
    } else {
      clickCounter = 0;
      imageOffset = 0;
      images.forEach((image) => {
        image.style.transform = `translateX(${imageOffset}px)`;
      });
      console.log("test");
    }
  };

  const clickLeft = () => {
    if (clickCounter >= 1) {
      imageOffset += 550;
      clickCounter--;
      console.log(imageOffset);
      console.log(clickCounter);
      images.forEach((image) => {
        image.style.transform = `translateX(${imageOffset}px)`;
      });
    } else {
      clickCounter = 2;
      imageOffset = -1100;
      images.forEach((image) => {
        image.style.transform = `translateX(${imageOffset}px)`;
      });
      console.log("test");
    }
  };

  return (
    <div className="scroll-bottom">
      <div className="arrow left" onClick={clickLeft}>
        <span>&#10092;</span>
      </div>
      <div className="arrow right" onClick={clickRight}>
        <span>&#10093;</span>
      </div>
    </div>
  );
};

export default Button;

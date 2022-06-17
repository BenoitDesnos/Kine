import React, { useEffect } from "react";

const Carroussel = () => {
  useEffect(() => {
    const images = document.querySelectorAll(
      "#root > div > div > div.about > div.about__carroussel > div.about__img > img"
    );

    const dots = document.querySelector(".dots");
    console.log(dots);
    for (let i = 0; i < images.length; i++) {
      let createSpan = document.createElement("span");
      dots.appendChild(createSpan);
    }
    const dotsArray = document.querySelectorAll(".dots > span");
    console.log(dotsArray);
    dotsArray[0].classList.add("is-active");

    let imageOffset = 0;
    let clickCounter = 0;
    let imageWidth = 550;
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    right.addEventListener("click", () => {
      if (clickCounter < images.length - 1) {
        imageOffset -= imageWidth;
        clickCounter++;
        images.forEach((image) => {
          image.style.transform = `translateX(${imageOffset}px)`;
        });
      } else {
        clickCounter = 0;
        imageOffset = 0;
        images.forEach((image) => {
          image.style.transform = `translateX(${imageOffset}px)`;
        });
      }
      console.log(dots);
      for (let i = 0; i < images.length; i++) {
        dotsArray[i].classList.remove("is-active");
        console.log("test");
      }
      dotsArray[clickCounter].classList.add("is-active");
    });
    left.addEventListener("click", () => {
      if (clickCounter > 0) {
        imageOffset += imageWidth;
        clickCounter--;
        images.forEach((image) => {
          image.style.transform = `translateX(${imageOffset}px)`;
        });
      } else {
        clickCounter = images.length - 1;
        imageOffset = -imageWidth * (images.length - 1);
        images.forEach((image) => {
          image.style.transform = `translateX(${imageOffset}px)`;
        });
      }
      for (let i = 0; i < images.length; i++) {
        dotsArray[i].classList.remove("is-active");
        console.log("test");
      }
      dotsArray[clickCounter].classList.add("is-active");
    });
  }, []);

  return (
    <>
      <div className="about__img">
        <img src="/assets/img/about-img1.PNG" alt="equipements" />
        <img src="/assets/img/about-img2.PNG" alt="equipements" />
        <img src="/assets/img/dos.jpg" alt="equipements" />
        <img src="/assets/img/about-img2.PNG" alt="equipements" />
      </div>
      <div className="scroll">
        <div className="arrow left">
          <span>&#10092;</span>
        </div>
        <div className="arrow right">
          <span>&#10093;</span>
        </div>
      </div>
      <div className="dots"></div>
    </>
  );
};

export default Carroussel;

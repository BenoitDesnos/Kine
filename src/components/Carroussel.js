import React, { useEffect } from "react";

const Carroussel = () => {
  useEffect(() => {
    const images = document.querySelectorAll(
      "#root > div > div > div.about > div.about__carroussel > div.about__img > img"
    );
    const imgContainer = document.querySelector(
      "#root > div > div > div.about > div.about__carroussel > div.about__img"
    );
    const dots = document.querySelector(".dots");
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    const imageCover = document.querySelector(".cover-first-click");
    let imageOffset = 0;
    let clickCounter = 0;
    let imageWidth = 550;
    let imageLilWidth = 300;

    /* --------------creation points reference images ----------------*/

    for (let i = 0; i < images.length; i++) {
      let createSpan = document.createElement("span");
      dots.appendChild(createSpan);
    }
    const dotsArray = document.querySelectorAll(".dots > span");
    dotsArray[0].classList.add("is-active");
    /* -------------------------------------------------------------*/

    const growImage = () => {
      if (window.innerWidth > 1100) {
        for (let i = 0; i < images.length; i++) {
          imgContainer.style.transform = "scale(1.7)";
        }
        imageCover.style.zIndex = "0";
        console.log("test");
      } else {
        imageCover.style.zIndex = "0";
      }
    };
    const shrinkImage = () => {
      for (let i = 0; i < images.length; i++) {
        imgContainer.style.transform = "scale(1)";
      }
    };

    /* --------------clic image ----------------*/
    imgContainer.addEventListener("click", growImage);
    imgContainer.addEventListener("mouseleave", shrinkImage);

    images.forEach((image) => {
      image.addEventListener("click", () => {
        if (clickCounter < images.length - 1) {
          if (window.innerWidth < 700) {
            imageOffset -= imageLilWidth;
          } else {
            imageOffset -= imageWidth;
          }
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
    });

    /* --------------clic droit ----------------*/

    right.addEventListener("click", () => {
      if (clickCounter < images.length - 1) {
        if (window.innerWidth < 700) {
          imageOffset -= imageLilWidth;
        } else {
          imageOffset -= imageWidth;
        }
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

    /* --------------clic gauche ----------------*/

    left.addEventListener("click", () => {
      if (clickCounter > 0) {
        if (window.innerWidth < 700) {
          imageOffset += imageLilWidth;
          console.log("test2");
        } else {
          imageOffset += imageWidth;
        }
        clickCounter--;
        images.forEach((image) => {
          image.style.transform = `translateX(${imageOffset}px)`;
        });
      } else {
        clickCounter = images.length - 1;
        if (window.innerWidth < 700) {
          imageOffset = -imageLilWidth * (images.length - 1);
          console.log("test2");
        } else {
          imageOffset = -imageWidth * (images.length - 1);
        }
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
      <h2 className="title-carroussel">Nos locaux.</h2>
      <div className="about__img">
        <div className="cover-first-click">
          <span>APPUYEZ SUR LA PHOTO POUR FAIRE DEFILER</span>
        </div>
        <img src="/assets/img/about-img1.PNG" alt="equipements" />
        <img src="/assets/img/about-img2.PNG" alt="equipements" />
        <img src="/assets/img/about-img3.PNG" alt="equipements" />
        <img src="/assets/img/about-img4.PNG" alt="equipements" />
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

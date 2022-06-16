import { Carousel } from "@sefailyasoz/react-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const MyApp = () => {
  const CarouselData = [
    {
      headerText: null,
      subText: null,
      image: "/assets/img/about-img1.PNG",
    },
    {
      headerText: null,
      subText: null,
      image: "/assets/img/about-img2.PNG",
    },
    {
      headerText: null,
      subText: null,
      image: "/assets/img/about-img1.PNG",
    },
  ];
  return (
    <Carousel
      data={CarouselData}
      autoPlay={true}
      rightItem={<FaArrowRight />}
      leftItem={<FaArrowLeft />}
      animationDuration={3000}
      headerTextType="black"
      subTextType="white"
      size="normal"
    />
  );
};

export default MyApp;

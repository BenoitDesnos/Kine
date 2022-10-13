import ScrollDown from "./ScrollDown";

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__cover">
        {props.children}
        <ScrollDown />
      </div>
    </div>
  );
}

export default Banner;

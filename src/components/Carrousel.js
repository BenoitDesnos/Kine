// props from Lodging.js
function Carrousel({ setClickCount, clickCount, picturesArray }) {
  // if more than one pciture return carrousell
  return picturesArray.length > 1 ? (
    <div className="about__carrousel">
      <h2 className="carrousel__title">
        Nos locaux, pour le plaisir des yeux !
      </h2>
      <div className="carrousel max__width">
        <span className="picture__order">
          {clickCount + 1 + "/" + picturesArray.length}
        </span>
        <i
          id="leftClick"
          onClick={() => {
            clickCount <= 0
              ? setClickCount(picturesArray.length - 1)
              : setClickCount(clickCount - 1);
          }}
          class="fa-solid fa-caret-left"
        ></i>

        <img
          src={picturesArray[clickCount]}
          alt="Images du carrousel"
          className="pictures"
        />
        <i
          id="rightClick"
          onClick={() => {
            clickCount >= picturesArray.length - 1
              ? setClickCount(0)
              : setClickCount(clickCount + 1);
          }}
          class="fa-solid fa-caret-right"
        ></i>
      </div>
    </div>
  ) : (
    // else return only one picture

    <div className="carrousel max__width">
      <img
        src={picturesArray[0]}
        alt="Images du carrousel"
        className="pictures"
      />
    </div>
  );
}

export default Carrousel;

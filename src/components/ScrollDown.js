function ScrollDown() {
  const html = document.querySelector("html");

  function handleScroll() {
    html.style.scrollBehavior = "smooth";
    setTimeout(() => {
      html.style.scrollBehavior = "auto";
    }, 500);
  }

  return (
    <>
      <section id="section10" className="demo">
        <a href={"#anchor"} onClick={handleScroll}>
          <span></span>Scroll
        </a>
      </section>
      <div id="anchor"></div>
    </>
  );
}

export default ScrollDown;

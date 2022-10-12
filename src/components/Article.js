import articles from "../data/articles.json";

const Article = ({ articleIndex }) => {
  const articleSplitted = articles[articleIndex].article.split("*");
  return (
    <div className="about__text">
      <h2>{articles[articleIndex].title}</h2>
      <p>
        {articleSplitted.map((articleString, index) =>
          index % 2 === 0 ? (
            <span key={articles[articleIndex].id + index}>{articleString}</span>
          ) : (
            <strong key={articles[articleIndex].id + index}>
              {articleString}
            </strong>
          )
        )}
      </p>
    </div>
  );
};

export default Article;

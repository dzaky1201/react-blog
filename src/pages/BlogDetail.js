import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getArticle() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${params.id}`
      );
      if (!request.ok) {
        return setNotFound(true);
      }
      const response = await request.json();
      document.title = response.title;
      setArticle(response);
      setLoading(false);
    }
    getArticle();
  }, [params]);

  if (notFound) {
    return <h1>Artikel tidak ditemukan gan !</h1>;
  }
  return (
    <section className="section">
      {loading ? (
        <i>Loading Article ...</i>
      ) : (
        <article className="article">
          <h1 className="article-title">{article.title}</h1>
          <time className="article-time">
            {new Date(article.published_at).toLocaleDateString()}
          </time>
          <img
            src={article.image_url}
            alt={article.title}
            className="article-image"
          />
          <p className="article-summary">{article.summary}</p>
          <p className="article-source">
            Source :{" "}
            <a href={article.url} target="_blank" rel="noopener">
              {article.news_site}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog";
  }, []);

  useEffect(() => {
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <p className="section-description">Berikut ini adalah karyaku loh !</p>
      {loading && <i>Loading data ....</i>}
      {!loading && (
        <div className="articles">
          {articles.results.map((article) => {
            return (
              <article key={article.id} className="article">
                <h2 className="article-title">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h2>
                <time className="article-time">
                  {new Date(article.published_at).toLocaleDateString()}
                </time>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

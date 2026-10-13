import "./styles.css";

function Article() {
  return (
    <article>
      <h2>This is a Headline 2</h2>
      <label htmlFor="id1">This is a label</label>
      <input id="id1" type="text" />
      <a
        href="https://de.wikipedia.org/wiki/Spezial:Zuf%C3%A4llige_Seite"
        className="article__link"
        rel="noreferrer noopener"
        target="_blank"
      >
        This is a Anchor | random article
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}

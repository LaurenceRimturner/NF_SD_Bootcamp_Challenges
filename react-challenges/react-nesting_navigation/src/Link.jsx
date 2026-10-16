export default function Link({ children }) {
  return (
    <a className="navigation__link" href={children}>
      {children}
    </a>
  );
}

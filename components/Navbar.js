import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">My Company</a>
        </Link>
        <div className="navbar">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item">
              <Link href="/catalog">
                <a className="nav-link">Houses Catalog</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

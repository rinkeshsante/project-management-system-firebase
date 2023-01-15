import { Link } from "react-router-dom";
import UserProfile from "../features/user/UserProfile";

export default function Navbar() {
  const links: {
    title: string;
    url: string;
  }[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Projects",
      url: "/project",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand">Navbar</a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.title}>
                <Link key={link.title} className="nav-link" to={link.url}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="d-flex align-items-center"
            style={{
              gap: 10,
            }}
          >
            <UserProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function Navbar() {
  const provider = new GoogleAuthProvider();
  const { user, auth } = useUser();

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

  function logIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function logOut() {
    signOut(auth);
  }

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
            {user ? (
              <>
                <span className="text-light">{user.email}</span>

                <button className="btn btn-sm btn-light" onClick={logOut}>
                  Logout
                </button>
              </>
            ) : (
              <button className="btn btn-sm btn-light" onClick={logIn}>
                login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

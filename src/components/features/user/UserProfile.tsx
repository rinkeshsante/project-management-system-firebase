import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import useUser from "../../../hooks/useUser";

type Props = {};

export default function UserProfile({}: Props) {
  const provider = new GoogleAuthProvider();
  const { user, auth } = useUser();

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
    <>
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
    </>
  );
}

import { initializeApp } from "firebase/app";
import "./App.css";
import AppRoutes from "./components/app-routes";
import { getFirebaseConfig } from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
// getPerformance();

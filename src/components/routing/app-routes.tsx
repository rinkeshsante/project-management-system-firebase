import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Home from "../features/home";
import ProjectList from "../features/projects/ProjectList";
import Navbar from "../ui/Navbar";
import AccessDenied from "./access-denied";
import NotFound from "./not-found";

type Props = {};

export default function AppRoutes({}: Props) {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );

  function ProtectedRoute() {
    return <>{user ? <Outlet /> : <AccessDenied />}</>;
  }
}

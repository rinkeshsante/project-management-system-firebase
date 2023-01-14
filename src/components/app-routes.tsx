import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import useUser from "../hooks/useUser";
import Header from "./elements/header";
import Projects from "./elements/projects";
import AccessDenied from "./pages/access-denied";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

type Props = {};

export default function AppRoutes({}: Props) {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  function ProtectedRoute() {
    return <>{user ? <Outlet /> : <AccessDenied />}</>;
  }
}

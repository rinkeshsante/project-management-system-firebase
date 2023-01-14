import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Dashboard from "../features/dashboard/Dashboard";
import ProjectDetails from "../features/projects/ProjectDetails";
import ProjectList from "../features/projects/ProjectList";
import Navbar from "../ui/Navbar";
import NotFound from "./not-found";

type Props = {};

export default function AppRoutes({}: Props) {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-2">
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="/project" element={<ProjectList />} />
            <Route path="/project/:id" element={<ProjectDetails />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );

  function ProtectedRoute() {
    return <>{user ? <Outlet /> : <>Loading...</>}</>;
  }
}

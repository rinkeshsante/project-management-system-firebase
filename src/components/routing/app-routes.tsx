import { lazy, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import useUser from "../../hooks/useUser";
import FeatureDetails from "../features/features/FeatureDetails";
import CreateForm from "../ui/form/CreateForm";
import EditForm from "../ui/form/EditForm";
import Loader from "../ui/Loader";
import Navbar from "../ui/Navbar";
import NotFound from "./not-found";

const Dashboard = lazy(() => import("../features/dashboard/Dashboard"));
const ProjectDetails = lazy(
  () => import("../features/projects/ProjectDetails")
);
const ProjectList = lazy(() => import("../features/projects/ProjectList"));
const ProjectForm = lazy(() => import("../features/projects/ProjectForm"));

type Props = {};

export default function AppRoutes({}: Props) {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-2 pb-4">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<ProtectedRoute />}>
              <Route index element={<Dashboard />} />
              <Route path="/project" element={<ProjectList />} />

              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route
                path="/project/add"
                element={<CreateForm FormComponent={ProjectForm} />}
              />
              <Route
                path="/project/edit/:id"
                element={
                  <EditForm
                    FormComponent={ProjectForm}
                    collectionName="projects"
                  />
                }
              />

              <Route path="/feature/add" element={<ProjectForm />} />
              <Route path="/feature/:id" element={<FeatureDetails />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );

  function ProtectedRoute() {
    return <>{user ? <Outlet /> : <>Loading...</>}</>;
  }
}

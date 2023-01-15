import {
  query,
  collection,
  getFirestore,
  limit,
  where,
  doc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import useDoc from "../../../hooks/useDoc";
import NotFound from "../../routing/not-found";
import BreadCrumb from "../../ui/BreadCrumb";
import DataDetails from "../../ui/DataDetails";
import Loader from "../../ui/Loader";
import FeatureList from "../features/FeatureList";
import { IProject, projects } from "./model";

type Props = {};

export default function ProjectDetails({}: Props) {
  const { id: _id } = useParams();
  const id = _id?.toString() || "";

  const { data: project, loading } = useDoc({
    collectionName: "projects",
    id,
  });

  if (loading) return <Loader />;

  return (
    <div>
      <BreadCrumb
        links={[
          {
            title: "Project",
            url: "/project",
          },
          {
            title: id || "...",
          },
        ]}
      />
      <DataDetails
        item={project}
        headers={["id", "heading", "description", "deadline"]}
      />
      <FeatureList />
    </div>
  );
}

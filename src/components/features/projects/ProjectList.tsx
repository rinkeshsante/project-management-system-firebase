import {
  collection,
  getFirestore,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import useReadQuery from "../../../hooks/useReadQuery";
import CardContainer from "../../ui/CardContainer";
import Loader from "../../ui/Loader";
import { IProject } from "./model";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const projectQuery = query(
    collection(getFirestore(), "projects"),
    orderBy("heading"),
    limit(6)
  );

  const { data, loading } = useReadQuery<IProject>(projectQuery);

  if (loading) return <Loader />;

  return (
    <>
      <CardContainer
        title="Projects"
        action={
          <Link to={"/project/add"} className="btn btn-sm btn-primary">
            Add
          </Link>
        }
      >
        {data?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </CardContainer>
    </>
  );
}

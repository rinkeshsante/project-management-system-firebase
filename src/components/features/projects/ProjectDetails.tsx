import { useParams } from "react-router-dom";
import NotFound from "../../routing/not-found";
import BreadCrumb from "../../ui/BreadCrumb";
import DataDetails from "../../ui/DataDetails";
import { IProject, projects } from "./model";

type Props = {};

export default function ProjectDetails({}: Props) {
  const { id } = useParams() || "";

  const project: IProject | undefined = projects.find((item) => item.id === id);
  if (project === undefined) return <NotFound />;

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
      <DataDetails item={project} />
    </div>
  );
}

import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import useDeleteDoc from "../../../hooks/useDeleteDoc";
import useDoc from "../../../hooks/useDoc";
import NotFound from "../../routing/not-found";
import BreadCrumb from "../../ui/BreadCrumb";
import DataDetails from "../../ui/DataDetails";
import DeleteModal from "../../ui/form/DeleteModal";
import Heading from "../../ui/Heading";
import Loader from "../../ui/Loader";
import Discussion from "../discussion/Discussion";
import FeatureListView from "../features/FeatureListView";

type Props = {};

export default function ProjectDetails({}: Props) {
  const { id: _id } = useParams();
  const id = _id?.toString() || "";

  const navigate = useNavigate();

  const { data: project, loading } = useDoc({
    collectionName: "projects",
    id,
  });

  if (loading) return <Loader />;
  if (project === null) return <NotFound />;

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

      <Heading text={"Project: " + project.heading}>
        <div className="btn-group btn-group-sm">
          <Link to={"/project/edit/" + id} className="btn btn-primary">
            Edit
          </Link>

          <button
            className="btn btn-danger"
            onClick={() => {
              useDeleteDoc({
                collectionName: "projects",
                id,
              }).then(() => {
                navigate("/project");
              });
            }}
          >
            delete
          </button>
        </div>
      </Heading>

      <DataDetails
        item={project}
        headers={["id", "heading", "deadline", "description"]}
      />

      <hr />

      <FeatureListView />

      <hr />
      <Discussion />
    </div>
  );
}

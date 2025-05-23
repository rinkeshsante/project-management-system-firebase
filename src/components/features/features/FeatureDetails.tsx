import { useParams } from "react-router-dom";
import useDoc from "../../../hooks/useDoc";
import NotFound from "../../routing/not-found";
import BreadCrumb from "../../ui/BreadCrumb";
import DataDetails from "../../ui/DataDetails";
import Loader from "../../ui/Loader";

type Props = {};

export default function FeatureDetails({}: Props) {
  const { id: _id } = useParams();
  const id = _id?.toString() || "";

  const { data: feature, loading } = useDoc({
    collectionName: "features",
    id,
  });

  if (loading) return <Loader />;
  console.log(feature);

  if (feature === null) return <NotFound />;

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
        item={feature}
        headers={["id", "heading", "description", "deadline"]}
      />
    </div>
  );
}

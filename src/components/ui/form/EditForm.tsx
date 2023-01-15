import { FC } from "react";
import { useParams } from "react-router-dom";
import useDoc from "../../../hooks/useDoc";
import NotFound from "../../routing/not-found";
import Loader from "../../ui/Loader";
import BreadCrumb from "../BreadCrumb";

type Props = {
  FormComponent: any;
  collectionName: string;
};
export default function EditForm({ FormComponent, collectionName }: Props) {
  const { id: _id } = useParams();
  const id = _id?.toString() || "";

  const { data: project, loading } = useDoc({
    collectionName: collectionName,
    id,
  });

  if (loading) return <Loader />;
  if (!loading && project === null) return <NotFound />;
  return (
    <>
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
      <FormComponent defaults={project} />
    </>
  );
}

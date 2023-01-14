type Props = {};

interface ProjectModel {
  id: string;
  name: string;
}

export default function Projects({}: Props) {
  // const ref = collection(firestore, "projects").withConverter(converter);
  // const [projects] = useCollectionData(q);
  const projects: any[] = [];

  console.log(projects);

  // console.log(value, loading, error);

  // if (loading) return <Spinner animation="border" />;

  return (
    <div>
      {projects?.map((doc) => (
        <div key={doc.id}>{doc.name}</div>
      ))}
    </div>
  );
}

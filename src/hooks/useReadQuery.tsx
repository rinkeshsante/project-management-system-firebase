import { DocumentData, onSnapshot, Query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useReadQuery<T>(dataQuery: Query<DocumentData>) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onSnapshot(dataQuery, (snapshot) => {
      let doc_data: any = [];
      setLoading(true);
      if (snapshot.docs.length > 0) {
        snapshot.docs.forEach((doc) => {
          const item = doc.data();
          item.id = doc.id;
          if (item !== undefined) {
            doc_data.push(item);
          }
        });
      } else {
        console.log("data not found");
      }
      setData(doc_data);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}

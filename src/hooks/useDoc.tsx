import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

type Props = {
  collectionName: string;
  id: string;
};

export default function useDoc<T>({ collectionName, id }: Props) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const docRef = doc(getFirestore(), collectionName, id);
  useEffect(() => {
    getDoc(docRef).then((snapshot) => {
      if (snapshot.exists()) {
        setData({ id, ...snapshot.data() });
      } else {
        console.log("no doc found");
      }
      setLoading(false);
    });
  }, []);

  return { data, loading };
}

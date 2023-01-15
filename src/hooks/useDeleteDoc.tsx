import React from "react";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

type Props = {
  collectionName: string;
  id: string;
};

export default async function useDeleteDoc({ collectionName, id }: Props) {
  return await deleteDoc(doc(getFirestore(), collectionName, id));
}

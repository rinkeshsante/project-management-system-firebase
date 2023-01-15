import { addDoc, collection, getFirestore } from "firebase/firestore";

type Props = {
  collectionName: string;
  data: any;
};
export default async function useAddQuery({ collectionName, data }: Props) {
  try {
    await addDoc(collection(getFirestore(), collectionName), data);
  } catch (error) {
    console.error("Error writing new message to Firebase Database", error);
  }
}

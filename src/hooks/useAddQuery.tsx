import {
  addDoc,
  setDoc,
  collection,
  getFirestore,
  doc,
} from "firebase/firestore";

type Props = {
  collectionName: string;
  data: any;
  key?: string;
};
export default async function useAddQuery({
  collectionName,
  key,
  data,
}: Props) {
  try {
    if (key === undefined) {
      // new doc (return id)
      const val = await addDoc(
        collection(getFirestore(), collectionName),
        data
      );
      return val.id;
    } else {
      // update only update new things
      await setDoc(doc(getFirestore(), collectionName, key), data, {
        merge: true,
      });

      return key;
    }
  } catch (error) {
    console.error("Error writing new message to Firebase Database", error);
    return "";
  }
}

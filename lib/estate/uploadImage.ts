import initFirebase from "@/lib/firebaseInit";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

initFirebase();

const storage = getStorage();

const storageRef = ref(storage, new Date().toISOString());

export default async function UploadImage(imageData: Blob) {
  try {
    await uploadBytes(storageRef, imageData);
    const img = await getDownloadURL(storageRef);
    return img;
  } catch (e: any) {
    console.log(e.message);
  }
}

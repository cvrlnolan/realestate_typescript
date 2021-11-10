import initFirebase from "@/lib/firebaseInit";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";

initFirebase();

const storage = getStorage();

const storageRef = ref(storage, new Date().toISOString());

type Data = {
  imageData: Blob;
  estateData: {};
  toast: Function;
};

export default async function UploadImage({
  imageData,
  estateData,
  toast,
}: Data) {
  async function upload() {
    try {
      await uploadBytes(storageRef, imageData);
      const img = await getDownloadURL(storageRef);
      const newEstateData = {
        ...estateData,
        imgUrl: img,
      };
      const insert = await axios.post("/api/estate/insert", newEstateData);
      if (insert.data.message === "Ok") {
        toast({
          title: "Estate added successfully.",
          description:
            "You have successfully included your estate to our listings.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (e: any) {
      console.log(e.message);
    }
  }

  if (typeof window !== "undefined") {
    upload();
  }
}

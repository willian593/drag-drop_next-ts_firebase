import {
  arrayUnion,
  doc,
  DocumentData,
  DocumentReference,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { db } from '../firebaseConf/client';
import { File } from '../interface/interface';

export const uploadImg = async (
  file: File[],
  docRef: DocumentReference<DocumentData>
) => {
  const nameImg = `${Math.random().toString(
    36
  )}-${Math.random()}-${Date.now()}`;

  const storage = getStorage();
  let storageRef = ref(storage, `images/${nameImg}_${file}`);
  const bytes = new Uint8Array();
  var formData = new FormData();
  await uploadBytes(storageRef, file);
  const downLoadUrl = await getDownloadURL(storageRef);
  const updateDocument = await updateDoc(doc(db, 'posts', docRef.id), {
    images: arrayUnion(downLoadUrl),
  });

  return updateDocument;
};

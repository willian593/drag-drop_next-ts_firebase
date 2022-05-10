import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { MutableRefObject } from 'react';
import { db } from '../firebaseConf/client';
import Post from '../interface/interface';

export const uploadPost = async (
  captionRef: MutableRefObject<HTMLInputElement>
) => {
  const docData: Post = {
    caption: captionRef.current.value,
    timestamp: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, 'posts'), docData);
  return docRef;
};

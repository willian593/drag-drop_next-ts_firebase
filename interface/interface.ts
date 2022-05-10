import { FieldValue } from 'firebase/firestore';

export default interface Post {
  caption: string;
  timestamp: FieldValue;
}

export interface File {
  lastModified: number;
  name: string;
  // path: string;
  preview: string;
  size: number;
  type: string;
}

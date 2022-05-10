import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Dropzone } from './components/Dropzone';

const Home: NextPage = () => {
  return (
    <>
      <Dropzone />
    </>
  );
};

export default Home;

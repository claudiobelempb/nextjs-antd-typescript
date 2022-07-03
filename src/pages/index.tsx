import { Button } from 'antd';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import '../styles/globals.less';

const Home: NextPage = () => {
  return (
    <h1>
      Home <Button type='primary'>Primary</Button>
    </h1>
  );
};

export default Home;

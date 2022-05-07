// import type { NextPage } from 'next'
// import Head from 'next/head'
import Image from 'next/image'
import Messy from '../components/Messy';
import styles from '../styles/Home.module.css'
// import { getSortedPostsData } from '../lib/posts';

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>
          <Messy>Hi，这里是弘树</Messy>
        </h1>
        <p></p>
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}

export default Home

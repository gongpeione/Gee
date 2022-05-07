// import type { NextPage } from 'next'
// import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Messy from '../components/Messy';
import styles from '../styles/index.module.css'
// import { getSortedPostsData } from '../lib/posts';

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

const Home = () => {
  const [messyFinished, setMessyFinished] = useState(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.title}>
          <h1>
            <Messy className={styles.titleMessy} cb={() => setMessyFinished(true)}>Hi，这里是弘树</Messy>
          </h1>
          <div className={[styles.subTitle, messyFinished ? styles.subTitleShow : ''].join(' ')}>
            <p>欢迎来到「我的世界」</p>
            <p>我是一个前端，偶尔兼职后端，假装会一点设计</p>
            <p>日常摄影，年更画手，几乎不更新 Blog</p>
          </div>
        </section>
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}

export default Home

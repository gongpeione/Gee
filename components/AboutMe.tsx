import { useEffect, useState } from 'react';
import menuStyles from './Menu.module.css';
import styles from './AboutMe.module.css';
import Messy from './Messy';

export default function AboutMe({ children }: any) {
  const [messyFinished, setMessyFinished] = useState(false);
  const [contentLeft, setContentLeft] = useState(0);

  // useEffect(() => {
  //   const menu = document.querySelector(`.${menuStyles.menuWrapper}`);
  //   const menuRect = menu?.getBoundingClientRect();
  //   setContentLeft(menuRect?.left || 0);
  // }, []);

  return <div className={styles.container}>
    <section className={styles.title}>
      <h1>
        <Messy className={styles.titleMessy} cb={() => setMessyFinished(true)}>Hi，这里是弘树</Messy>
      </h1>
      <div className={[styles.subTitle, messyFinished ? styles.subTitleShow : ''].join(' ')}>
        <p>欢迎来到「我的世界」</p>
        <p>
          我是一个<span className={styles.highlight} data-target="" onMouseEnter={() => 1}>程序员</span>，日常写前端，
          偶尔兼职后端，
          会一点<span className={styles.highlight} data-target={styles.design}>设计</span>，
          日常<span className={styles.highlight}>摄影</span>，
          年更<span className={styles.highlight}>画手</span>，
          几乎不更新<span className={styles.highlight}>博客</span>
        </p>
        <p>
        </p>
        <p>希望自己不设限，尝试一切有趣的事物</p>
      </div>
    </section>
  </div>;
}

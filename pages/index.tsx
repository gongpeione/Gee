// import type { NextPage } from 'next'
// import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Messy from '../components/Messy';
import styles from '../styles/index.module.css'
// import { getSortedPostsData } from '../lib/posts';

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

const Home = () => {
  const [messyFinished, setMessyFinished] = useState(false);

  const portalList = useMemo(() => {
    return [
      {
        title: '项目集',
        link: '/projects',
        class: styles.projects
      },
      {
        title: '摄影',
        link: '/photo',
        class: styles.photo
      },
      {
        title: '设计',
        link: '/design',
        class: styles.design
      },
      {
        title: '绘画',
        link: '/draw',
        class: styles.draw
      },
      {
        title: '博客',
        link: '/photo',
        class: styles.blog
      }
    ]
  }, []);

  const contactMeList = useMemo(() => {
    return [
      {
        title: 'Github',
        link: 'https://github.com/gongpeione',
        class: styles.github
      },
      {
        title: 'Email',
        link: 'email:ggongpei@gmail.com',
        class: styles.email
      },
    ]
  }, []);

  const linkList = useMemo(() => {
    return [
      {
        title: '地瓜',
        link: 'https://digua.me/',
        class: styles.digua
      }
    ]
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
            </p>
            <p>
              日常<span className={styles.highlight}>摄影</span>，
              年更<span className={styles.highlight}>画手</span>，
              几乎不更新<span className={styles.highlight}>博客</span>
            </p>
            <p>希望自己不设限，尝试一切有趣的事物</p>
          </div>
        </section>
        <div className={styles.portal}>
          <ul className={styles.portalList}>
            {portalList.map(portal => (
              <li className={[styles.portalItem, portal.class].join(' ')} key={portal.link}>
                <Link href={portal.link}>{portal.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.contact}>
          <div className={styles.contactTitle}>你也可以在这些地方找到我</div>
          <ul className={styles.contactList}>
            {contactMeList.map(contact => (
              <li className={contact.class} key={contact.link} onClick={() => window.open(contact.link, '_blank', '')}>
                {contact.title}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.links}>
          <div className={styles.linkTitle}>我的朋友们</div>
          <ul className={styles.linkList}>
            {linkList.map(contact => (
              <a className={contact.class} key={contact.link} href={contact.link} target="_blank" rel="noreferrer">
                {contact.title}
              </a>
            ))}
          </ul>
        </div>

        <div className={styles.copyright}>对技术充满好奇</div>
      </footer>
    </div>
  )
}

export default Home

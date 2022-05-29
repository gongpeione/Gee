// import type { NextPage } from 'next'
// import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { createContext, useContext, useMemo, useState } from 'react';
import Messy from '../components/Messy';
import Menu from '../components/Menu';
import styles from '../styles/index.module.css';
import AboutMe from '../components/AboutMe';
import getMenuItems from '../lib/getMenuItems';
// import { getSortedPostsData } from '../lib/posts';

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export const Context = createContext({
  currentInView: ''
});

export const menuItems: {
  name: string;
  icon: string;
  target: string;
  iconContent?: string;
}[] = [
  {
    name: 'Project',
    icon: '/icons/project.svg',
    target: 'project'
  },
  {
    name: 'Photo',
    icon: '/icons/photo.svg',
    target: 'photo'
  },
  {
    name: 'Draw',
    icon: '/icons/paint.svg',
    target: 'draw'
  },
  {
    name: 'Design',
    icon: '/icons/design.svg',
    target: 'design'
  },
  {
    name: 'Blog',
    icon: '/icons/blog.svg',
    target: 'blog'
  },
  {
    name: 'Friends',
    icon: '/icons/friend.svg',
    target: 'friends'
  }
];

export type TMenuItem = typeof menuItems;

export async function getStaticProps() {
  const items = await getMenuItems(menuItems);

  return {
    props: {
      menuItems: items,
    },
  };
}

const Home = (props: Awaited<ReturnType<typeof getStaticProps>>["props"]) => {
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
    <Context.Provider value={{ currentInView: 'project' }}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Menu menuItems={props.menuItems} />
          <AboutMe />
          {/* <div className={styles.portal}>
            <ul className={styles.portalList}>
              {portalList.map(portal => (
                <li className={[styles.portalItem, portal.class].join(' ')} key={portal.link}>
                  <Link href={portal.link}>{portal.title}</Link>
                </li>
              ))}
            </ul>
          </div> */}
        </main>

        <footer className={styles.footer}>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
    </Context.Provider>
  )
}

export default Home

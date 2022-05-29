import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../pages';
import styles from './Menu.module.css';

const menuItems = [
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
]

export default function Menu() {
  const [showMenuItem, setShowMenuItem] = useState(true);
  const context = useContext(Context);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > window.screen.height / 2) {
        setShowMenuItem(false);
      } else {
        setShowMenuItem(true);
      }
    });
  }, []);

  return <div className={styles.menu}>
    <ul className={styles.menuWrapper}>
      {
        menuItems.map((item, index) => {
          const elementList = [];
          const currentInViewItem = menuItems.filter(item => item.target === context.currentInView)[0];
          const logoStyle = !showMenuItem && currentInViewItem ? { backgroundImage: `url(${currentInViewItem.icon})` } : {};
          const itemClass = [styles.menuItem, !showMenuItem ? styles.menuItemHide : styles.menuItemShow].filter(Boolean).join(' ');

          if (index === menuItems.length / 2) {
            elementList.push(<li className={styles.logo} style={logoStyle}></li>);
          }

          elementList.push(
            <li key={item.name} className={itemClass}>
              <Image className={styles.itemIcon} src={item.icon} alt={item.name} width={73} height={73} />
              <span>{item.name}</span>
            </li>
          );

          return elementList;
        })
      }
    </ul>
  </div>;
}

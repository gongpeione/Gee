import Image from 'next/image';
import { useCallback, useContext, useEffect, useState } from 'react';
import getMenuItems from '../lib/getMenuItems';
import { Context } from '../pages';
import styles from './Menu.module.css';
import { getStaticProps } from '../pages/index';

export default function Menu({ menuItems }: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  const [showMenuItem, setShowMenuItem] = useState(true);
  const [isLogoHover, setIsLogoHover] = useState(false);
  const context = useContext(Context);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > window.screen.height / 3) {
        setShowMenuItem(false);
      } else {
        setShowMenuItem(true);
      }
    });
  }, []);

  const handleLogoHover = useCallback(() => setIsLogoHover(true), []);
  const handleLogoLeave = useCallback(() => setIsLogoHover(false), []);

  return <div className={styles.menu}>
    <ul className={styles.menuWrapper}>
      {
        menuItems.map((item, index) => {
          const elementList = [];
          const currentInViewItem = menuItems.filter(item => item.target === context.currentInView)[0];
          const logoStyle = !showMenuItem && currentInViewItem ? { backgroundImage: `url(${currentInViewItem.icon})` } : {};
          const itemClass = [
            styles.menuItem,
            !showMenuItem && !isLogoHover ? styles.menuItemHide : styles.menuItemShow,
            styles[item.name.toLowerCase()]
          ].filter(Boolean).join(' ');

          if (index === menuItems.length / 2) {
            elementList.push(<li className={styles.logo} style={logoStyle} onMouseEnter={handleLogoHover} onMouseLeave={handleLogoLeave}></li>);
          }

          elementList.push(
            <li key={item.name} className={itemClass}>
              <div className={styles.itemIcon} dangerouslySetInnerHTML={{ __html: item.iconString }}></div>
              {/* <Image className={styles.itemIcon} src={item.icon} alt={item.name} width={73} height={73} /> */}
              <span>{item.name}</span>
            </li>
          );

          return elementList;
        })
      }
    </ul>
  </div>;
}

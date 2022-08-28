import cn from 'classnames';
import styles from './Footer.module.scss';
import { ReactComponent as IconHome } from './icons/home.svg';
import { ReactComponent as IconBag } from './icons/bag.svg';
import { ReactComponent as IconGift } from './icons/gift.svg';
import { ReactComponent as IconAccount } from './icons/account.svg';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              <IconHome className={styles.icon} />
              Главная
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="#" className={cn(styles.navLink, styles.navLinkActive)}>
              <IconBag className={cn(styles.icon, styles.iconBag)} />
              Витрина
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              <IconGift className={styles.icon} />
              Подарки
            </a>
          </li>

          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              <IconAccount className={cn(styles.icon, styles.iconAccount)} />
              Аккаунт
            </a>
          </li>
        </ul>
      </nav>

      <button className={styles.scan}>Сканер</button>
    </footer>
  );
};

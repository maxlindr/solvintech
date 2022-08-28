import { ReactComponent as Logo } from '../../images/logo.svg';
import { HamburgerBtn } from './components/HamburgerBtn';
import styles from './Header.module.scss';

interface Props {
  onToggle(): void;
}

export const Header = ({ onToggle }: Props) => {
  return (
    <header className={styles.root}>
      <Logo className={styles.logo} />
      <HamburgerBtn className={styles.openBtn} onClick={onToggle} />
    </header>
  );
};

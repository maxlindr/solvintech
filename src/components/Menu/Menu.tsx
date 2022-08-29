import styles from './Menu.module.scss';
import { ReactComponent as CloseIcon } from './close-btn.svg';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ModalDialog } from '../ModalDialog';

interface Props {
  open: boolean;
  onCloseClick(): void;
}

export const Menu = ({ open, onCloseClick }: Props) => {
  return (
    <ModalDialog open={open}>
      <div className={styles.root}>
        <header className={styles.header}>
          <Logo className={styles.logo} />
          <button className={styles.closeButton} onClick={onCloseClick}>
            <CloseIcon />
          </button>
        </header>

        <ul className={styles.items}>
          <li className={styles.item}>
            <a className={styles.link} href="#">
              Магазины
            </a>
          </li>

          <li className={styles.item}>
            <a className={styles.link} href="#">
              Еда
            </a>
          </li>

          <li className={styles.item}>
            <a className={styles.link} href="#">
              Услуги и сервисы
            </a>
          </li>

          <li className={styles.item}>
            <a className={styles.link} href="#">
              Развлечения
            </a>
          </li>

          <li className={styles.item}>
            <a className={styles.link} href="#">
              Новости
            </a>
          </li>
        </ul>
      </div>
    </ModalDialog>
  );
};

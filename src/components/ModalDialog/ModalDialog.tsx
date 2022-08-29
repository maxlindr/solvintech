import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './ModalDialog.module.scss';

interface Props {
  open?: boolean;
  children?: ReactNode;
}

export const ModalDialog = ({ open = false, children }: Props) => {
  return <div className={cn(styles.root, open && styles.open)}>{children}</div>;
};

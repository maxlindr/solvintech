import { ButtonHTMLAttributes } from 'react';
import { ReactComponent as Icon } from './hamburger.svg';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export const HamburgerBtn = ({ className, ...props }: Props) => {
  return (
    <button className={className} {...props}>
      <Icon />
    </button>
  );
};

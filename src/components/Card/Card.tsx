import cn from 'classnames';
import styles from './Card.module.scss';

interface Props {
  title: string;
  scores: number;
  className?: string;
  image: string;
}

export const Card = ({ title, scores, className, image }: Props) => {
  return (
    <li className={cn(className, styles.root)}>
      <div className={styles.imageWrapper}>
        <img loading="lazy" src={image} alt={title} className={styles.image} />
      </div>

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.scores}>{scores}</p>
    </li>
  );
};

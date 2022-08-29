import styles from './Breadcrumbs.module.scss';

interface Item {
  title: string;
  url?: string;
}

interface Props {
  className?: string;
  items: Item[];
}

export const Breadcrumbs = ({ className, items }: Props) => {
  return (
    <nav aria-label="Хлебные крошки" className={className}>
      <ul className={styles.items}>
        {items.map(({ title, url }) => (
          <li key={title} className={styles.item}>
            {url ? (
              <a href={url} className={styles.link}>
                {title}
              </a>
            ) : (
              <p>{title}</p>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Card } from '../../components/Card';
import styles from './Showcase.module.scss';

import img from '../../images/cover.jpg';

export const Showcase = () => {
  const breadcrumbs = [
    { title: 'Главная', url: '#' },
    { title: 'Личный кабинет' },
  ];

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <Breadcrumbs items={breadcrumbs} />
          <h1 className={styles.title}>Витрина{<br />}подарков</h1>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.container}>
          <p className={styles.totalScores}>Твои баллы: 50</p>

          <ul className={styles.cards}>
            <Card title="Термокружка" scores={700} image={img} />
            <Card title="Термокружка" scores={700} image={img} />
            <Card title="Фен-щётка" scores={700} image={img} />
            <Card title="Внешний аккумулятор" scores={700} image={img} />
          </ul>
        </div>
      </div>
    </div>
  );
};

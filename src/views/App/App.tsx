import { Header } from '../../components/Header';
import styles from './App.module.scss';

export const App = () => {
  const handleHeaderToggle = () => {
    console.log('toggle');
  };

  return (
    <div className={styles.app}>
      <Header onToggle={handleHeaderToggle} />
      <main className={styles.main}>
        <h1 className="visually-hidden">Тестовое задание</h1>
      </main>
    </div>
  );
};

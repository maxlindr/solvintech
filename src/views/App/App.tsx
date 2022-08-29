import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header';
import { Showcase } from '../Showcase';
import styles from './App.module.scss';

export const App = () => {
  const handleHeaderToggle = () => {
    console.log('toggle');
  };

  return (
    <div className={styles.app}>
      <Header onToggle={handleHeaderToggle} />
      <main className={styles.main}>
        <Showcase />
      </main>
      <Footer />
    </div>
  );
};

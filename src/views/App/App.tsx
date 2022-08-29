import { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Showcase } from '../Showcase';
import styles from './App.module.scss';

export const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.app}>
      <Header onToggle={() => setMenuOpen(true)} />

      <main className={styles.main}>
        <Showcase />
      </main>

      <Footer />

      <Menu
        onCloseClick={() => setMenuOpen(() => !isMenuOpen)}
        open={isMenuOpen}
      />
    </div>
  );
};

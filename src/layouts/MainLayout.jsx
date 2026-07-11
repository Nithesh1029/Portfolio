import { useLenis } from '../hooks/useLenis';
import LoadingScreen from '../components/common/LoadingScreen';
import Navbar from '../components/common/Navbar';

const MainLayout = ({ children }) => {
  useLenis();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <LoadingScreen />
      <Navbar />

      <main
        id="main-content"
        style={{ paddingTop: 'var(--navbar-height)' }}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
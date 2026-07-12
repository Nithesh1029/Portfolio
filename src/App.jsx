import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Github from './sections/Github';
import Contact from './sections/Contact';
import AISign from './sections/AISign';
import Footer from './components/common/Footer';
import  Clouds from './components/effects/Clouds'

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      <AISign />
      <Footer />
    </MainLayout>
    // <Clouds/>
  );
}

export default App;
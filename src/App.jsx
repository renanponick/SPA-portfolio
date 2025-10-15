import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          {/* <Skills />
          <Experience /> */}
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;


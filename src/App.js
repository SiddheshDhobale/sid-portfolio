import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExp from './components/WorkExp/WorkExp';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import MyContextProvider from './Context/ContextProvider';

function App() {
  return (
    <MyContextProvider>
      {/* <Router>
        <Navbar />
       
        <Routes>
            <Route path='/' element={<ScrollComponents />} />
          </Routes>
          </Router> */}
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <WorkExp />
        <Projects />
        <Contact />

      </div>
      <Footer />

    </MyContextProvider>
  );
}

export default App;

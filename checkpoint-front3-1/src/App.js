/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.scss';
import Header from './components/header'
import Banner from './components/banner'
import Footer from './components/footer'
import AboutMe from './components/quemsou'
import Cards from './components/projetos'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner>
          <AboutMe />
        </Banner> 
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default App;

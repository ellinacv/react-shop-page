import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';
import { Brands } from './components/brands/Brands';
import { Catalog } from './components/catalog/Catalog';
import { Promo } from './components/promo/Promo';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Brands />
      <Catalog />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;

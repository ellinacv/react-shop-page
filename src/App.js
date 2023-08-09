import { Brands } from './components/brands/Brands';
import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Brands />
    </div>
  );
}

export default App;

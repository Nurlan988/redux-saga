import { BrowserRouter } from 'react-router-dom';
import Header from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { MainRouter } from './router';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <MainRouter />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
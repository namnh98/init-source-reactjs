import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import AboutPage from './screens/aboutpage';
import HomePage from './screens/homepage';
import ShopPage from './screens/shoppage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

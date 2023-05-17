import Footer from '../../components/footer';
import Header from '../../components/header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

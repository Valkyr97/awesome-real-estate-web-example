import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, footer = true }) => {
  return (
    <>
      <NavBar />
      {children}

      {footer && <Footer />}
    </>
  );
};

export default Layout;

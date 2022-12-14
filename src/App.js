import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/scrollUp/ScrollTop";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pages/notFound/PageNotFound";
import Login from "./components/user/Login";
import Contact from "./components/pages/contact/Contact";
import Service from "./components/pages/service/Service";
import Register from "./components/user/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ScrollTop />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pages/notFound/PageNotFound";
import Login from "./components/user/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/login" element={<Login />} />

          <Route path="/about" element={<ProtectedRoute Component={About} />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

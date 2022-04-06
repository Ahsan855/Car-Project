import "./App.css";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Shop from "./Components/Shop/Shop";
import Products from "./Components/Products/Products";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState({});
  const handleWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((misteck) => {
        console.misteck("misteck", misteck);
        setUser(misteck);
      });
  };
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/button" element={<Button/>} />
      </Routes>
      
    </div>
  );
}

export default App;

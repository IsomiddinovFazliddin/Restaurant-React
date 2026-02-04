import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Modal from "./components/modal/Modal";

const App = () => {
  const api = `https://dummyjson.com/recipes`;
  const [postdata, setPostdata] = useState([]);

  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState([]);

  const getData = async (link) => {
    const req = await fetch(link);
    const data = await req.json();
    setPostdata(data.recipes);
  };

  useEffect(() => {
    getData(api);
  }, []);

  const addModal = (product) => [setModalProduct((item) => [...item, product])];

  return (
    <>
      <BrowserRouter>
        <Navbar setModal={setModal} cartCount={modalProduct.length} />
        {modal ? (
          <Modal
            setModal={setModal}
            modalProduct={modalProduct}
            setModalProduct={setModalProduct}
          />
        ) : (
          ""
        )}
        <Routes>
          <Route
            path="/"
            element={<Homepage postdata={postdata} addModal={addModal} />}
          />
          <Route
            path="/productdetail/:id"
            element={<ProductDetail postdata={postdata} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

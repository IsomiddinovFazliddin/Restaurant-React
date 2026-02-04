import React from "react";
import "./Modal.scss";
import { MdOutlineDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Modal = ({ setModal, modalProduct, setModalProduct }) => {
  return (
    <>
      <div className="modal">
        <div className="wrap">
          <h2>Mahsulotlar</h2>
          <button
            className="close"
            onClick={() => {
              setModal(false);
            }}
          >
            <IoClose />
          </button>
          <div className="card">
            {modalProduct.map((item, index) => {
              return (
                <div key={index} className="box">
                  <div className="info">
                    <div className="imgs">
                      <img src={item.image} alt="" />
                    </div>
                    <div>
                      <h3>{item.name.slice(0, 15)}</h3>
                      <h4>$1.24</h4>
                    </div>
                  </div>
                  <MdOutlineDelete
                    onClick={() => {
                      setModalProduct(
                        modalProduct.filter((item, id) => id !== index),
                      );
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

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
            {modalProduct.length > 0 ? (
              modalProduct.map((item, index) => {
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
              })
            ) : (
              <img className="emptyImg"
                src="https://i.ytimg.com/vi/TMIxbMgRLG4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCaghG8KTMbxxPbm-T9Q6rN0wb_QA"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

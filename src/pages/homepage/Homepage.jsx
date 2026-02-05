import React, { useState } from "react";
import "./Homepage.scss";
import { RiShoppingCart2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Homepage = ({ postdata, addModal }) => {
  const [visibleProduct, setVisibleProduct] = useState(6);

//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });

  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>
            Welcome! <br /> We Made Delicious Food for You
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <button>Order Online</button>
        </div>
      </div>

      <main>
        <section className="video-section">
          <div className="container">
            <div className="title">
              <h2>Why We are Best Food Maker</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="card">
              <div className="info">
                <p>
                  It is a long established fact that a reader will be distracted
                  layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using English. Many desktop publishing packages and web page
                  editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose It is a long
                  established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  normal distribution of letters, as opposed to using 'Content
                  Many desktop publishing packages and web page editors search
                  for 'lorem ipsum' will uncover many web sites still in humour
                  and the like. Read More
                </p>
              </div>
              <div className="box">
                <img src="/imgs/homeVideo.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="menu-section">
          <div className="container">
            <div className="title">
              <h2>Our Best & Delicious Menu</h2>
              <ul>
                <button autoFocus>All</button>
                <button>Bread</button>
                <button>Chiffon & Rolls</button>
                <button>Donut</button>
                <button>Pastry & Danish</button>
                <button>Cakes</button>
                <button>Cookies</button>
              </ul>
            </div>
            <div className="card">
              {postdata.slice(0, visibleProduct).map((item) => {
                return (
                  <div className="box">
                    <div className="imgs">
                      <img src={item.image} alt="" />
                    </div>
                    <h4>{item.name.slice(0, 25)}</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div className="price">
                      <NavLink to={`/productdetail/${item.id}`}>
                        Batafsil
                      </NavLink>
                      <button
                        onClick={() => {
                          addModal(item);
                        }}
                      >
                        <RiShoppingCart2Line />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            {visibleProduct < postdata.length && (
              <div className="row">
                <button
                  className="allBtn"
                  onClick={() => {
                    setVisibleProduct(postdata.length);
                  }}
                >
                  See All
                </button>
              </div>
            )}
          </div>
        </section>
        <section className="blok-section">
          <div className="container">
            <h2>We believe in making quality food</h2>
            <div className="content">
              <div>
                <h3>2M+</h3>
                <h6>Happy Customers</h6>
              </div>
              <div>
                <h3>98%</h3>
                <h6>Customer Satisfaction</h6>
              </div>
              <div>
                <h3>20+</h3>
                <h6>Our Branches </h6>
              </div>
              <div>
                <h3>100+</h3>
                <h6>Total Employees </h6>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <div className="container">
            <div className="info">
              <h2>Our Restaurants. Where to Find Us?</h2>
              <p>
                Want to have a superb meal in an exceptional setting with
                family, friends or work colleagues, here are the addresses of
                our restaurants.
              </p>
              <button>Find The Nearest Cheffest</button>
            </div>
            <div className="map">
              <img src="/imgs/map.png" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;

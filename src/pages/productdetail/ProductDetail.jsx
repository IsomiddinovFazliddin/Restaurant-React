import React, { useEffect } from "react";
import "./ProductDetail.scss";
import { HiCheckBadge } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = ({ postdata }) => {
  const { id } = useParams();

  const filterData = postdata.find((item) => {
    return item.id === Number(id);
  });
  console.log(filterData);

  const navigate = useNavigate();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <div className="productdetail">
        <div className="container">
          <div className="cardImgs">
            <img src={filterData?.image} alt="" />
          </div>
          <div className="cardInfo">
            <div className="title">
              <h2>{filterData?.name}</h2>
              <h3>
                <span>
                  <HiCheckBadge /> {filterData?.rating}
                </span>
                $1.24
              </h3>
            </div>
            <h3>Masalliqlar</h3>
            <p>{filterData?.ingredients.join(", ")}</p>
            <h3>Ko'rsatmalar</h3>
            <p>{filterData?.instructions.join(", ")}</p>
            <div className="content">
              <div className="title">
                <h4>- Pishirish vaqti</h4>
                <h4>- Tayyorgarlash vaqti</h4>
                <h4>- Porsiyalar</h4>
                <h4>- Caloriyasi</h4>
                <h4>- Oshxona</h4>
                <h4>- Ovqat turi</h4>
              </div>
              <div className="element">
                <h5>{filterData?.cookTimeMinutes}</h5>
                <h5>{filterData?.prepTimeMinutes}</h5>
                <h5>{filterData?.servings}</h5>
                <h5>{filterData?.caloriesPerServing}</h5>
                <h5>{filterData?.cuisine}</h5>
                <h5>{filterData?.mealType.join(", ")}</h5>
              </div>
            </div>
            <div className="btns">
              <button
                onClick={() => {
                  alert("Xaridingiz uchun raxmat");
                  navigate("/");
                }}
              >
                Xarid qilish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

import React from "react";

import "../CardProduct/CardProduct.css";


function CardProduct(props) {
  const renderBook = (itemBook) => {
    return (
      <>
        <div className="card-body text-center ">
          <img src={itemBook.photo} className="card-img-top card-img" alt="..." />
          <div className="m-3">
          <h4 className="card-title  rgb(var(--bs-body-color))">
            {itemBook.title}
            <span className="text-secondary subtitle d-block">
              {itemBook.subtitle}
            </span>
          </h4>

          <p className="card-text text-start">{itemBook.snippets}</p>
          <a href="#" className=" button  ">
            Comprar
          </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
<div className="col-12 mt-50">
      <div className="m-3 text-center card col-4">
        {renderBook(props.book)}
      </div>
      </div>
    </>
  );
}

export default CardProduct;
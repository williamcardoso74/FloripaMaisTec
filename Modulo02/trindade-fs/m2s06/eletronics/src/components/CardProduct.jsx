import React from "react";
import Headset from "../images/headset.jpg";
import Microphone from "../images/microphone.jpg";
import "../styles/CardProduct.css";

function CardProduct() {
  let store = [
    {
      id: 1,
      item: "Headset",
      photo: "headset.jpg",
      price: Number((Math.random() * 2000).toFixed(2)),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis ante tortor, vel sagittis velit ultricies quis. Mauris ipsum mauris.",
      caracters: [
        `lorem${Number((Math.random() * 10).toFixed(0))}`,
        `lorem${Number((Math.random() * 10).toFixed(0))}`,
        `lorem${Number((Math.random() * 10).toFixed(0))}`,
        `lorem${Number((Math.random() * 10).toFixed(0))}`,
       ]
    },
    {
      id: 2,
      item: "Microphone",
      photo: "microphone.jpg",
      price: Number((Math.random() * 2000).toFixed(2)),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis ante tortor, vel sagittis velit ultricies quis. Mauris ipsum mauris.",
      caracters: [
        `lorem${Number((Math.random() * 10).toFixed(0))}`,
        `lorem${Number((Math.random() * 10).toFixed(0))}`,
        `lorem${Number((Math.random() * 10).toFixed(0))}`,
        `lorem${Number((Math.random() * 10).toFixed(0))}`,
       ]
    },
    
  ]

  const getPathFile = (nameImage) => {
    const BASEPATH = "./images/products/NAME_IMAGE"
    return BASEPATH.replace('NAME_IMAGE', nameImage)
  }

  const renderListItem = (item) => {
    return (
      <li key={item}>{item}</li>
    )
  }

  const renderStore = (item) => {
    return (
      <div key={item.id} className="container CardProduct-Wrapper">
        <div className="col-6 CardImage-Wrapper">
          <img
            className="img-custom img-thumbnail"
            src={getPathFile(item.photo)}
            alt={item.item}
          />
          <span>{item.price}</span>
        </div>
        <div className="col-6 CardContent-Wrapper">
          <h2>{item.item}</h2>
          <p>{item.description}</p>
          <div className="Row-Wrapper">
            <div className="col-6 List-Wrapper">
              <ul>
                {item.caracters.map(renderListItem)}
              </ul>
            </div>
            <div className="col-6 Button-Wrapper">
              <button type="button" className="btn btn-warning">
                Mais Sobre
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return(
    <>
      {store.map(renderStore)}
    </>
  )

  /*  return ( 
        <div className="container CardProduct-Wrapper">
            <div className="col-6 CardImage-Wrapper">
                <img className="img-custom img-thumbnail" src={Headset} alt="Headset" />
                <span>R$99,00</span>
            </div>
            <div className="col-6 CardContent-Wrapper">
                <h2>Headset</h2>
                <p>Descrição Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cumque?</p>
                <div className="Row-Wrapper">
                    <div className="col-6 List-Wrapper">
                        <ul>
                            <li>Lista 01</li>
                            <li>Lista 02</li>
                        </ul>
                    </div>
                    <div className="col-6 Button-Wrapper">
                        <button type="button" className="btn btn-warning">Mais Sobre</button>
                    </div>
                </div>
            </div>

        </div>
     ); */
}

export default CardProduct;

import React from "react";
import Headset from "../images/headset.jpg";
import Microphone from "../images/microphone.jpg";
import "../styles/CardProduct.css";

function CardProduct() {

    let store = [
        {
            item: "Headset",
            photo: "",
            price: 99.99,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio atque rem perferendis eum repellat corporis aliquid qui ducimus fugiat quisquam!",
        }
    ]

    return ( 
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
     );
}

export default CardProduct;
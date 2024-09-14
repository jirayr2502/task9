import React from "react"
import { IProductProps } from "../context/types"


export const Product: React.FC<IProductProps> = ({ id, name, price, photo, onDispatch }) => {

    return (
        <div >
            <img src={photo}></img>
            <h6>{name}</h6>
            <p>price: <strong>{price} USD</strong></p>
            <button
                onClick={() => onDispatch({ type: 'add/product', payload: id })}
            >Move</button>
        </div>
    )
}
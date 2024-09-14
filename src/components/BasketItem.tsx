import { IBasketProps } from "../context/types"

export const BasketItem: React.FC<IBasketProps> = ({ id, name, price, count, onDispatch }) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{count}</td>
                <td>{count * price}</td>
                <td>
                    <button
                        className="btn btn-success"
                        onClick={() => onDispatch({ type: 'upCount/product', payload: id })}
                    >+</button>
                    <button
                        className="btn btn-warning"
                        onClick={() => onDispatch({ type: 'downCount/product', payload: id })}
                    >-</button>
                    <button
                        className="btn btn-danger"
                        onClick={() => onDispatch({ type: 'remove/product', payload: id })}
                    >x</button>
                </td>
            </tr>
        </>
    )
}
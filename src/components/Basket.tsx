import { useContext } from "react"
import { ProductContext } from "../context/context"
import { BasketItem } from "./BasketItem"

export const Basket = () => {

    const context = useContext(ProductContext)

    if (!context) {
        throw new Error('error')
    }

    const { state, dispatch } = context

    return (
        <div className="col-md-5">
            <h3>Basket</h3>
            <h5>items: <strong>{state.baskets.length}</strong></h5>
            <h5>total: <strong>{state.total}</strong></h5>
            <table className='table table-dark table-bordered'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>count</th>
                        <th>subtotal</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.baskets.map(basket => <BasketItem
                            key={basket.id}
                            {...basket}
                            onDispatch={dispatch}
                        />)
                    }
                </tbody>
            </table>
        </div>
    )
}
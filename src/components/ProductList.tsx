import { useContext } from "react"
import { ProductContext } from "../context/context"
import { Product } from "./Product"

export const ProductList = () => {

    const context = useContext(ProductContext)

    if (!context) {
        throw new Error('error')
    }

    const { state, dispatch } = context

    return (
        <div className="col-md-7">

            <div className="row">
                {
                    state.products.map(product => <Product
                        key={product.id}
                        {...product}
                        onDispatch={dispatch}
                    />)
                }
            </div>
        </div>
    )
}
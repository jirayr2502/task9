import { IAction, IState } from "./types";

export const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case 'add/product':

            const prod = state.products.find(product => product.id == action.payload)
            const found = state.baskets.find(basket => basket.id == action.payload)

            if (prod) {
                if (found) {
                    return {
                        ...state,
                        baskets: [...state.baskets]
                    }
                } else {
                    return {
                        ...state,
                        baskets: [...state.baskets, { ...prod, count: 1 }]
                    }
                }
            } else {
                return state
            }

        case 'upCount/product':

            return {
                ...state,
                baskets: state.baskets.map(basket =>
                    basket.id == action.payload ?
                        {
                            ...basket,
                            count: basket.count + 1
                        }
                        : basket
                )
            }

        case 'downCount/product':

            return {
                ...state,
                baskets: state.baskets.map(basket => {
                    if (basket.id == action.payload) {
                        if (basket.count > 1) {
                            return {
                                ...basket,
                                count: basket.count - 1
                            }
                        }
                    }
                    return basket
                })
            }

        case 'remove/product':

            return {
                ...state,
                baskets: state.baskets.filter(basket => basket.id != action.payload)
            }

        case 'change/total':

            return {
                ...state,
                total: state.baskets.reduce((aggr, initialValue) => {
                    return aggr + initialValue.count * initialValue.price
                }, 0)
            }



        default:
            return state
    }
}
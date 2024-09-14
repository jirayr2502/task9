import { Dispatch } from "react"

export interface IProduct {
    id: number
    name: string
    price: number
    photo: string
}

export interface IBasket {
    id: number
    name: string
    price: number
    photo: string
    count: number
}

export interface IState {
    products: IProduct[]
    baskets: IBasket[]
    total: number
}

export interface IAction {
    type: string
    payload?: unknown
}

export interface IContext {
    state: IState
    dispatch: Dispatch<IAction>
}

export interface IProductProps {
    id: number
    name: string
    price: number
    photo: string
    onDispatch: Dispatch<IAction>
}

export interface IBasketProps {
    id: number
    name: string
    price: number
    count: number
    onDispatch: Dispatch<IAction>
}
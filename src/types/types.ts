export type PizzaObj = {
    id: number
    imageUrl : string
    name : string
    types : Array<number>
    sizes : Array<number>
    price : number
    category : number
    rating : number
}


export type PizzaObjForCart = {
    id : number
    imageUrl : string
    name : string
    size : number
    type : string
    price : number
}

export type SortItem = {
    name : string
    type : string
}

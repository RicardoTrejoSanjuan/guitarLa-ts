export type iGuitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

// Herencia entre tipos
export type iCartItem = iGuitar & {
    quantity: number;
}

export type iGuitarId = iGuitar['id'];


// Herencia de un tipo a una interzas
// export interface iCartItem extends iGuitar {
//     quantity: number;
// }

/**
 * PICK
 */
// export type iCartItem = Pick<iGuitar, 'id' | 'name'> & {
//     quantity: number;
// }

/**
 * PICK
 */
// export type iCartItem = Omit<iGuitar, 'id' | 'name'> & {
//     quantity: number;
// }
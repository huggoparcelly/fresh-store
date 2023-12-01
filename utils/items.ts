export interface Item {
    id: number;
    name: string;
    image: string;
    price: number;
}

export const items: Item[] = [
    {id: 1, name: 'Pants', image: 'pants.png', price: 15},
    {id: 2, name: 'Jacket', image: 'jacket.png', price: 20},
    {id: 3, name: 'Shoes', image: 'shoes.png', price: 15},
    {id: 4, name: 'Shorts', image: 'shorts.png', price: 20},
    {id: 5, name: 'Socks', image: 'socks.png', price: 5},
    {id: 6, name: 'Hat', image: 'hat.png', price: 10}
]
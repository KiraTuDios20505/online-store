export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    sellerId: string;
}
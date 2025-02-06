export interface Product {
    id?: number,
    name?: string,
    price?: number,
    stock?: number,
    categoryId?: number,
    isActive?: boolean,
    category?: {
        id?: number,
        name?: string,
    }
}
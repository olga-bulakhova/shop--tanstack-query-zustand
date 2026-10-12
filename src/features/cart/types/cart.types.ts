export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  thumbnail: string;
}

export interface ICartResponse {
  total: number;
  totalProducts: number;
  totalQuantity: number;
}

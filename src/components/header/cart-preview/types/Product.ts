export default interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  colour?: string;
  size?: string;
  quantity: number;
  price: number;
}

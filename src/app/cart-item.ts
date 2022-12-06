import { Produit } from "./produit";

export class CartItem {
    id: number;
    name: string;
    imageUrl: string;
    unitPrice: number;
  
    quantity: number;
  
    constructor(product: Produit) {
      this.id = product.id;
      this.name = product.productname;
      this.imageUrl = product.productimage;
      this.unitPrice = product.productprice;
      this.quantity = 1;
    }

    
}

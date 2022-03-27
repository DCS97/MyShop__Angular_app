import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];

  constructor(private http: HttpClient) {}

  add(quantity: number, newProduct: Product) {
    console.log('quantity', quantity);
    let product: Product | undefined = this.cartProducts.find(
      (item) => item.id === newProduct.id
    );
    if (product) {
      let newProductQuantity;
      newProductQuantity = (product.quantity as number) + quantity;
      product.quantity = newProductQuantity;
    } else {
      newProduct.quantity = quantity;
      this.cartProducts = [...this.cartProducts, newProduct];
    }
    window.alert('Product successfully added');
  }

  get(): Product[] {
    return this.cartProducts;
  }

  remove(productId: number) {
    this.cartProducts = this.cartProducts.filter(
      (product) => product.id !== productId
    );
  }

  getTotalAmount(): number {
    let total: number = 0;
    this.cartProducts.forEach((product) => {
      if (product.quantity) {
        total += product.quantity * product.price;
      }
    });
    return total;
  }

  getTotalProducts(): number {
    let total: number = 0;
    this.cartProducts.forEach((product) => {
      if (product.quantity) {
        total += product.quantity;
      }
    });
    return total;
  }

  empty(): void {
    this.cartProducts = [];
  }
}

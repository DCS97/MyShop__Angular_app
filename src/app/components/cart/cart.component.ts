import { Component, OnInit } from '@angular/core';
import { isEqual } from 'lodash';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalAmount: number = 0;
  totalProducts: number = 0;
  cart: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.get();
    this.totalAmount = this.cartService.getTotalAmount();
    this.totalProducts = this.cartService.getTotalProducts();
  }

  ngDoCheck() {
    const updatedCart = this.cartService.get();
    if (!isEqual(updatedCart, this.cart)) {
      this.cart = updatedCart;
    }
    this.totalAmount = this.cartService.getTotalAmount();
    this.totalProducts = this.cartService.getTotalProducts();
  }
}

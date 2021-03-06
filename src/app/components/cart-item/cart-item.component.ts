import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() removeItemFromCart: EventEmitter<Product> = new EventEmitter();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  removeCartItem(productId: number): void {
    this.removeItemFromCart.emit(this.product);
    this.cartService.remove(productId);
  }

  updateQuantity(event: Event) {
    this.product.quantity = Number((event.target as HTMLSelectElement).value);
  }
}

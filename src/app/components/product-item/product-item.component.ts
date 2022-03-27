import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Input() quantity: number = 1;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  setQuantity(event: Event) {
    this.quantity = parseInt((event.target as HTMLSelectElement).value);
  }

  addToCart() {
    this.cartService.add(this.quantity, this.product);
  }
}

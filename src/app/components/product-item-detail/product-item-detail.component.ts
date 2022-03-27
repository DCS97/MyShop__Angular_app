import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/products.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = new Product();
  quantity: number = 1;
  product_id: number = 0;

  constructor(
    private cartService: CartService,
    private productsService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.product_id = this.route.snapshot.params['id'];

    this.productsService.fetchProducts().subscribe((products: Product[]) => {
      this.product = products.find(
        (product: Product) => product.id == this.product_id
      ) as Product;
    });
  }

  setQuantity(event: Event) {
    console.log('event.target: ', event.target);
    this.quantity = parseInt((event.target as HTMLSelectElement).value);
  }

  addToCart() {
    this.cartService.add(this.quantity, this.product);
  }
}

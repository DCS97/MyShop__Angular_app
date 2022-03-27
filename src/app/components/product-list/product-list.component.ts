import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productsService: ProductService) {}
  products: Product[] = [];
  ngOnInit(): void {
    this.productsService.fetchProducts().subscribe((products) => {
      products.forEach((product) => (product.quantity = 0));
      this.products = products;
    });
  }
}

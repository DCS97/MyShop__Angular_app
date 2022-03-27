import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  @Input() cart: Product[] = [];
  name: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.save({
      name: this.name,
      address: this.address,
      creditCard: this.creditCard,
    });
    this.router.navigateByUrl('checkout/confirmation');
  }
}

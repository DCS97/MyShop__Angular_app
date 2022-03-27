import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  user: User = new User();
  totalAmount: number = 0;

  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.get();
    this.totalAmount = this.cartService.getTotalAmount();
  }

  ngOnDestroy(): void {
    this.userService.clear();
    this.cartService.empty();
  }
}

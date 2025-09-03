import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  CartService = inject(Cart);
}

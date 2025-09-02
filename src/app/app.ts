import { Component, signal } from '@angular/core';3

import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { ProductsList } from './pages/products-list/products-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ProductsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-angular');
}

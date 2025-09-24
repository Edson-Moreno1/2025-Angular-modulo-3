import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../core/types/Products';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth/auth.service';
import { AdminDirective } from '../../../core/directives/admin.directive';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [RouterLink, CommonModule, AdminDirective],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'
})
export class ProductsCardComponent {
  @Input() product!:Product;
}

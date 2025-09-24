import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../core/types/Products';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'
})
export class ProductsCardComponent implements OnInit{
  @Input() product!:Product;
  rol: string ='';

  constructor(private authService: AuthService){
  }
  ngOnInit(): void {
    this.rol = this.authService.decodedToken?.role ?? '';
  }

}

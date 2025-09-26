import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SideMenuComponent } from "../../components/sidebar/side-menu/side-menu.component";
import { routeItem } from '../../components/sidebar/menu-item/menu-item.component';
import { AdminDirective } from '../../core/directives/admin.directive';


@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ CommonModule, SideMenuComponent, AdminDirective],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  sideBarOpen: boolean = false;

  routes: routeItem[] = [
    { title: 'Inicio', route: '', textColor:'text-green-200'},
    { title: 'Productos', route: '/products' },
    { title: 'Categorias', route:'/categories'}
  ];
  
  adminRoutes: routeItem[]=[
    { title: 'Productos', route: '/admin/products' },
    { title: 'Usuarios', route: '/admin/users' },
    { title: 'Categorias', route: '/admin/categories' },
    { title: 'Compras', route: '/admin/purchases' },
  ]
}

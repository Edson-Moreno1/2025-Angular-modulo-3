import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItemComponent } from "../../components/sidebar/menu-item/menu-item.component";
import { SideMenuComponent } from "../../components/sidebar/side-menu/side-menu.component";


@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ CommonModule, SideMenuComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  sideBarOpen: boolean = false;

  routes: { title: string; route: string }[] = [
    { title: 'Inicio', route: '' },
    { title: 'Productos', route: '/products' },
    { title: 'Categorias', route:'/categories'}
  ];
  
  adminRoutes: { title: string; route: string }[]=[
    { title: 'Productos', route: '/admin/products' },
    { title: 'Usuarios', route: '/admin/users' },
    { title: 'Categorias', route: '/admin/categories' },
    { title: 'Compras', route: '/admin/purchases' },
  ]
}

import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Directive({
  selector: '[appAdmin]'
})
export class AdminDirective implements OnInit{

  constructor(
    private authService:AuthService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { 

  }
  ngOnInit(): void {

  }
  private checkAdminAccess():void{
    const role = this.authService.decodedToken?.role ?? '';
    this.viewContainer.clear();
    if (role ==='admin') {
        this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }

}

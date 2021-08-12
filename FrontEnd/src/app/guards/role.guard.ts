import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    public router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot):boolean{
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token') as string;

    var arrayUsuario:any = decode(token);
    const roleId = arrayUsuario["roleId"];
    console.log(roleId);

    if(!this.authService.isAuth() || roleId !== expectedRole){
      console.log("Usuario no autorizado para la vista");
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}

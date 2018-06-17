import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AfService} from '../providers/af.service';
// import { tap,map,take} from 'rxjs/Operator';
import { map, take, tap } from 'rxjs/operators';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private af : AfService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.af.user$.pipe(
      take(1),
      map(user => user && user['roles'].admin?true:false),
      tap(isAdmin=>{
        if(!isAdmin){
          console.error("Access denied - Admin only allowed");
          this.router.navigate(['/login']);
        }
      })
    );
  }
}

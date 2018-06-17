import { Component, OnInit } from '@angular/core';
import {AfService} from '../providers/af.service';
import {User} from '../providers/user';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  constructor(public AfService:AfService,private router:Router) {
   }
  ngOnInit() {
    // this.AfService.user$.subscribe(user => {this.user = user});
    // this.AfService.user$.subscribe(user=>{
    //   this.user=user;
    // });
  }
  login(){
    this.AfService.loginWithGoogle(); 
    this.router.navigate(['/pageone']); 
  }
  signOut(){

  }
}

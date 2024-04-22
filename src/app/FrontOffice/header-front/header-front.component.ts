import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthServiceService } from 'src/app/serives/auth/user-auth-service.service';

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.css']
})
export class HeaderFrontComponent {
  constructor(private router:Router,
    private userAuthServiceService : UserAuthServiceService){

  }
  public isloged(){
    return  this.userAuthServiceService.isLoggedIn();
  }

  login(){
    this.router.navigate(['/login'])
  }
  logout() {
    this.userAuthServiceService.clear();
    }
}

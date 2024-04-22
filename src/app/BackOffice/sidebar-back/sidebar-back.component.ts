import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthServiceService } from 'src/app/serives/auth/user-auth-service.service';

@Component({
  selector: 'app-sidebar-back',
  templateUrl: './sidebar-back.component.html',
  styleUrls: ['./sidebar-back.component.css']
})
export class SidebarBackComponent {
  constructor(private router:Router,
    private userAuthServiceService : UserAuthServiceService){}
  logout() {
    this.userAuthServiceService.clear();
    this.router.navigate(['/login'])
    }
    public isloged(){
      return  this.userAuthServiceService.isLoggedIn();
    }
    onOptionChange(event: Event): void {
      const route = (event.target as HTMLSelectElement).value;
      if (route) {
        this.router.navigateByUrl(route);
      }
    }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {User} from '../user';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,
  private router: Router) { }

  ngOnInit() {
    try {
      this.authService.getCurrentUser().then((user: User) => {
        this.authService.logout();
        this.router.navigateByUrl('/login');
      }, (error) => console.log(error));
    } catch (exception) {
      console.log(exception);
    }
  }

}

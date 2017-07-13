import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../user';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  loading = true;
  alert: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    try {
      this.authService.getCurrentUser().then((user: User) => {
        this.user = user;
        this.router.navigateByUrl('/home');
      }, (error) => console.log(error));
    } catch (exception) {
      console.log(exception);
    }
    this.user = new User();
    this.loading = false;
  }

  signup(user: User): void {
    this.loading = true;
    this.alert = '';
    console.log('test');
    this.authService.signUp(user).then((response: any) => {
      if (response && response.token) {
        this.loading = false;
        this.router.navigateByUrl('/home');
      }

    }, (error: any) => {
      this.loading = false;
      error = JSON.parse(error._body);
      this.alert = error.message.toString();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../user';
import {Article} from '../article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  articles: User[];
  loading = true;
  alert: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().then((articles: User[]) => this.articles = articles);
    try {
      this.authService.getCurrentUser().then((user: User) => {
        this.user = user;
      }, (error) => this.router.navigateByUrl('/login'));
    } catch (exception) {
      if (exception.message === 'no token found') {
        console.log(exception.message);
        this.router.navigateByUrl('/login');
      }
    }
    this.user = new User();
    this.loading = false;
  }

}

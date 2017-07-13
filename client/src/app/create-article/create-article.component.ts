import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Article} from '../article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ArticleService} from '../article.service';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  user: User;
  article: Article;
  loading: boolean;
  url: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.loading = true;
    this.article = new Article();
    this.user = new User();
    try {
      this.authService.getCurrentUser().then((user: User) => {
        this.user = user;
        this.loading = false;
      }, (error) => this.router.navigateByUrl('/login'));
    } catch (exception) {
      console.log(exception);
      if (exception.message === 'no token found') {
        this.router.navigateByUrl('/login');
      }
    }
  }

  create(article: Article): void {
    if (this.user.token === undefined) {
      try {
        this.authService.getCurrentUser().then((user: User) => {
          this.user = user;
          this.articleService.postArticle(this.user.token, article).then(
            (response: any) => this.router.navigateByUrl('/article/' + article.url ));
        }, (error) => this.router.navigateByUrl('/login'));
      } catch (exception) {
        console.log(exception);
        if (exception.message === 'no token found') {
          this.router.navigateByUrl('/login');
        }
      }
    } else {
      this.articleService.postArticle(this.user.token, article).then(
        (response: any) => this.router.navigateByUrl('/article/' + article.url));
    }
  }
}

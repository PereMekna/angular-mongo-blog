import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../user';
import {Article} from '../article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ArticleService} from '../article.service';
import {Comment} from '../comment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  user: User;
  loading: boolean;
  author: User;
  url: string;
  comment: Comment;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private articleService: ArticleService) { }

  ngOnInit() {
    console.log('test');
    this.comment = new Comment();
    if (this.user === undefined) {
      this.user = new User();
    }
    if (this.author === undefined) {
      this.author = new User();
      this.author.article = new Article();
    }
    this.url = this.route.snapshot.params['url'];
    this.articleService.getArticleByUrl(this.url).then((author: User) => {
      console.log(author);
      this.author = author;
      this.loading = true;
    });
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

  postComment(comment: Comment) {
    if (this.user.token === undefined) {
      try {
        this.authService.getCurrentUser().then((user: User) => {
          this.user = user;
          this.articleService.postComment(this.author.article.url, this.user.token, comment).then(
            (response: any) => {
              if (this.author.article.comments === undefined) {
                this.author.article.comments = [];
              }
              comment.name = this.user.name;
              comment.datePublication = new Date(Date.now());
              this.author.article.comments.push(comment);
            });
        }, (error) => this.router.navigateByUrl('/login'));
      } catch (exception) {
        console.log(exception);
        if (exception.message === 'no token found') {
          this.router.navigateByUrl('/login');
        }
      }
    } else {
      this.articleService.postComment(this.author.article.url, this.user.token, comment).then(
        (response: any) => {
          if (this.author.article.comments === undefined) {
            this.author.article.comments = [];
          }
          comment.name = this.user.name;
          comment.datePublication = new Date(Date.now());
          this.author.article.comments.push(comment);
        });
    }
  }

}

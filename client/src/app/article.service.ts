import { Injectable } from '@angular/core';
import {User} from './user';
import { Article } from './article';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ArticleService {
  private baseUrl = 'http://localhost:3000/api/';
  private articleUrl = 'article/';
  private articlesUrl = 'articles/';
  private commentUrl = 'comment/';

  constructor(private http: Http) { }

  getArticles(): Promise<User[]> {
    return this.http.get(this.baseUrl + this.articlesUrl).toPromise().then(
      response => response.json() as User[]
    ).catch(this.handleError);
  }

  getArticleByUrl(url): Promise<User> {
    return this.http.get(this.baseUrl + this.articleUrl + url).toPromise().then(
      response => response.json() as User
    ).catch(this.handleError);
  }

  postArticle(token, article): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + this.articleUrl + token, JSON.stringify(article),
      {headers: headers}).toPromise().then(response => response.json()).catch(this.handleError);
  }

  postComment(url, token, comment): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + this.articleUrl + url + '/' + this.commentUrl + token, JSON.stringify(comment),
      {headers: headers} ).toPromise().then(
      response => response.json()
    ).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}

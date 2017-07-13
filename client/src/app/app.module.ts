import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {AuthService} from './auth.service';
import {ArticleService} from './article.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'article', component: CreateArticleComponent},
  { path: 'logout', component: LogoutComponent},
  {
    path: 'article/:url',
    component: ArticleComponent
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ArticleComponent,
    CreateArticleComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

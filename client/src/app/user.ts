import {Article} from './article';
/**
 * Created by dupon on 09/07/2017.
 */
export class User {
  _id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  articles: Article[];
  article: Article;
}

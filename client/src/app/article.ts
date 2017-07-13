/**
 * Created by dupon on 09/07/2017.
 */

import { Comment } from './comment';

export class Article {
  url: string;
  title: string;
  text: string;
  datePublication: Date;
  comments: Comment[];
}

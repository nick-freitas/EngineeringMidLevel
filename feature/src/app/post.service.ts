import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {BaseService} from "./base.service";
import {Post} from "./post";

@Injectable()
export class PostService extends BaseService {
  private getPostsForThreadUrl: (id) => string;

  constructor(private http: Http) {
    super();

    this.getPostsForThreadUrl = (id) => `${this.baseUrl}threads/${id}/posts`;
  }

  getPostsForThread(id): Observable<Post[]> {
    return this.http.get(this.getPostsForThreadUrl(id))
      .map(res => {
        const resThreads = res.json() || [];

        return resThreads.map(post => new Post(post.id, post.content, post.user));
      })
      .catch(this.errorHandler);
  }
}

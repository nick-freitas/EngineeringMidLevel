import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {BaseService} from "./base.service";
import {Post} from "./post";

@Injectable()
export class PostService extends BaseService<Post> {
  constructor(http: Http) {
    super(http);
  }

  getListForThread(id, page: number, limit: number): Observable<Post[]> {
    const queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set('page', page.toString());
    queryParams.set('limit', limit.toString());

    return this.http
      .get(this.getListForThreadUrl(id), {
        params: queryParams
      })
      .map(res => {
        const responseBody = res.json() || [];

        return {
          list: responseBody.map(element => this.createNewInstance(element)),
          totalCount: res.headers.get('X-total-count')
        };
      })
      .catch(this.errorHandler);
  }

  createForThread(id, entity): Observable<Post> {
    return this.http.post(this.createForThreadUrl(id), entity)
      .map(res => this.createNewInstance(res.json() || {}))
      .catch(this.errorHandler);
  }

  getOneUrl(id: number): string {
    return `${this.baseUrl}posts/${id}`;
  }

  updateUrl(id: number): string {
    return `${this.baseUrl}posts/${id}`;
  }

  destroyUrl(id: number): string {
    return `${this.baseUrl}posts/${id}`;
  }

  createNewInstance(post): Post {
    return new Post(post.id, post.content, post.user);
  }

  createForThreadUrl(id): string {
    return `${this.baseUrl}threads/${id}/posts`;
  }

  getListForThreadUrl(id) {
    return `${this.baseUrl}threads/${id}/posts`;
  }

  /**
   * Not applicable methods
   */

  getList(_, __): Observable<any> {
    throw new Error(`Cannot get all posts from this interface`);
  }

  create(_): Observable<Post> {
    throw new Error(`Use createForThread() instead`);
  }

  /**
   * Undefined URLs
   */

  getListUrl(): string {
    return undefined;
  }

  createUrl(): string {
    return undefined;
  }
}

import {Component, Input} from "@angular/core";
import {BaseListComponent} from "../base-list-component";
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'rafr-thread-post-list',
  template: './thread-post-list.component.html',
  styles: [`
    .post-card {
      margin-top: 12px;
    }
  `]
})
export class ThreadPostListComponent extends BaseListComponent<Post> {
  @Input() threadId: number;

  constructor(private postService: PostService) {
    super();
  }

  getList(page, limit) {
    return this.postService.getListForThread(this.threadId, page, limit);
  }
}

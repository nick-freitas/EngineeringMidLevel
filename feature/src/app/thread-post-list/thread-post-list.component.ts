import {Component, Input, OnInit} from '@angular/core';
import {BaseListComponent} from "../base-list-component";
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'rafr-thread-post-list',
  templateUrl: './thread-post-list.component.html',
  styleUrls: ['./thread-post-list.component.scss']
})
export class ThreadPostListComponent extends BaseListComponent<Post>{
  @Input() threadId: number;

  constructor(private postService: PostService) {
    super();
  }

  getList(page, limit) {
    return this.postService.getListForThread(this.threadId, page, limit);
  }
}

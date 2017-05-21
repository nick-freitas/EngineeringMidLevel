import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Thread} from "../thread";
import {ActivatedRoute} from "@angular/router";
import {ThreadService} from "../thread.service";
import {PostService} from "../post.service";
import {Post} from "../post";

@Component({
  selector: 'rafr-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  thread: Observable<Thread>;
  posts: Observable<Post[]>;

  constructor(private threadService: ThreadService,
              private postService: PostService,
              private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.posts = await this.fetchPosts();
    this.thread = await this.fetchThread()
  }

  private async fetchPosts(): Promise<Observable<Post[]>> {
    const id = this.route.snapshot.params['id'];
    return this.postService.getPostsForThread(id);
  }

  private async fetchThread(): Promise<Observable<Thread>> {
    const id = this.route.snapshot.params['id'];
    return this.threadService.getThread(id);
  }
}

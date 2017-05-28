import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Thread} from "../thread";
import {ActivatedRoute} from "@angular/router";
import {ThreadService} from "../thread.service";

@Component({
  selector: 'rafr-thread',
  template: `
    <div *ngIf="thread | async; let thread; else threadNotLoaded">
      <div class="card card-inverse thread-header" style="background-color: #333; border-color: #333;">
        <div class="card-block d-flex justify-content-between">
          <h3 class="card-title">{{thread.name}}</h3>
          <button type="button" class="btn btn-danger pull-right" (click)="destroy()" disabled>Delete</button>
        </div>
      </div>

      <rafr-thread-post-list [threadId]="thread.id"></rafr-thread-post-list>

    </div>

    <ng-template #threadNotLoaded>
      <rafr-loading [loadingText]="'Loading thread'"></rafr-loading>
    </ng-template>
  `
})
export class ThreadComponent implements OnInit {
  thread: Observable<Thread>;

  constructor(private threadService: ThreadService,
              private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.thread = await this.fetchThread()
  }

  private async fetchThread(): Promise<Observable<Thread>> {
    const id = this.route.snapshot.params['id'];
    return this.threadService.getOne(id);
  }
}

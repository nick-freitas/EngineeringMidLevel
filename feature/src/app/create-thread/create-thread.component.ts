import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ThreadService} from "../thread.service";

@Component({
  selector: 'rafr-create-thread',
  template: `
    <div class="card">
      <div class="card-block">
        <form (ngSubmit)="createThread()" #createThreadForm="ngForm">
          <h4 class="card-title">Create Thread</h4>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" aria-describedby="nameHelp"
                   placeholder="Enter name"
                   [(ngModel)]="threadModel.name" required>
            <small id="nameHelp" class="form-text text-muted">The thread's name</small>
          </div>
          <button type="submit" class="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  `
})
export class CreateThreadComponent {
  threadModel: ThreadModel;

  constructor(private threadService: ThreadService,
              private router: Router,
              private route: ActivatedRoute) {
    this.threadModel = {};
  }

  // todo missing all of the fields to create
  createThread() {
    const id = this.route.snapshot.params['id'];
    this.threadService.createForFeature(id, this.threadModel)
      .subscribe(thread => this.router.navigate([`/threads/${thread.id}`]));
  }
}

interface ThreadModel {
  name?: string;
}

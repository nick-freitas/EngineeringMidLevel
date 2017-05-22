import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ThreadService} from "../thread.service";

@Component({
  selector: 'rafr-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.scss']
})
export class CreateThreadComponent {
  threadModel: ThreadModel;

  constructor(private threadService: ThreadService,
              private router: Router,
              private route: ActivatedRoute) {
    this.threadModel = {};
  }

  // todo missing all of the fields t create
  createThread() {
    const id = this.route.snapshot.params['id'];
    this.threadService.createForFeature(id, this.threadModel)
      .subscribe(thread => this.router.navigate([`/threads/${thread.id}`]));
  }
}

interface ThreadModel {
  name?: string;
}

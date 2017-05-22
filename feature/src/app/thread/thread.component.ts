import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Thread} from "../thread";
import {ActivatedRoute} from "@angular/router";
import {ThreadService} from "../thread.service";

@Component({
  selector: 'rafr-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
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

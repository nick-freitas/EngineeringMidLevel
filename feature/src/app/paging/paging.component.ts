import {Component, DoCheck, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'rafr-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements DoCheck {
  @Input() totalCount: number;
  @Input() page: number;
  @Input() limit: number;
  @Output() changePage: EventEmitter<number>;
  numberOfPages: number;

  constructor() {
    this.changePage = new EventEmitter<number>();
    this.numberOfPages = 1;
  }

  ngDoCheck() {
    let numberOfPages = Math.ceil(this.totalCount / this.limit);

    if (numberOfPages < 1) {
      numberOfPages = 1;
    }

    if (this.numberOfPages !== numberOfPages) {
      this.numberOfPages = numberOfPages;
    }
  }

  setPage(newPage) {
    if (newPage < 1) {
      newPage = 1;
    }

    this.changePage.emit(newPage);
  }
}

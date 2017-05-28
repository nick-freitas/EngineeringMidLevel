import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'populate'
})
export class PopulatePipe implements PipeTransform {
  transform(id: any, list: any[]): any {
    if (!id || !list) {
      return;
    }

    if (!(list instanceof Array)) {
      return;
    }

    const filteredList = list.filter(element => element.id === id);
    return filteredList && filteredList[0];
  }
}

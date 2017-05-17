import {Client} from "./client";
import {ProductArea} from "./product-area";
import {Status} from "./status";

export class FeatureRequest {
  constructor(public id: number,
              public title: string,
              public description: string,
              public clientPriority: number,
              public client: Client,
              public targetDate: Date,
              public ticketUrl: string,
              public productArea: ProductArea,
              public status: Status) {
  }
}

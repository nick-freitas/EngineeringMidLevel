export class FeatureRequest {
  constructor(public id: number,
              public title: string,
              public description: string,
              public clientPriority: number,
              public client: number,
              public targetDate: Date,
              public ticketUrl: string,
              public productArea: number,
              public status: string) {
  }
}

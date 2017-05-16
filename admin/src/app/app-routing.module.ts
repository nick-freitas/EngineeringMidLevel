import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ClientListComponent} from "./client-list/client-list.component";
import {ClientComponent} from "./client/client.component";
import {HomeComponent} from "./home/home.component";
import {CreateClientComponent} from "./create-client/create-client.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clients',
    component: ClientListComponent
  },
  {
    path: 'clients/:id',
    component: ClientComponent
  },
  {
    path: 'create-client',
    component: CreateClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

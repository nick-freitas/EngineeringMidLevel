import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ClientListComponent} from "./client-list/client-list.component";
import {ClientComponent} from "./client/client.component";
import {HomeComponent} from "./home/home.component";
import {CreateClientComponent} from "./create-client/create-client.component";
import {ProductAreaComponent} from "./product-area/product-area.component";
import {ProductAreaListComponent} from "./product-area-list/product-area-list.component";
import {CreateProductAreaComponent} from "./create-product-area/create-product-area.component";

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
  },

  {
    path: 'product-areas',
    component: ProductAreaListComponent
  },
  {
    path: 'product-areas/:id',
    component: ProductAreaComponent
  },
  {
    path: 'create-product-area',
    component: CreateProductAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

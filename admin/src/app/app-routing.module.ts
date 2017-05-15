import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ClientListComponent} from './client-list/client-list.component';
import {ClientComponent} from './client/client.component';
import {HomeComponent} from './home/home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

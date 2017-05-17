import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {CallbackComponent} from "./callback/callback.component";
import {AuthGuard} from "./auth-guard.service";
import {CreateFeatureRequestComponent} from "./create-feature-request/create-feature-request.component";
import {FeatureRequestComponent} from "./feature-request/feature-request.component";
import {FeatureRequestListComponent} from "./feature-request-list/feature-request-list.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },

  {
    path: 'feature-requests',
    component: FeatureRequestListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'feature-requests/:id',
    component: FeatureRequestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-feature-request',
    component: CreateFeatureRequestComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

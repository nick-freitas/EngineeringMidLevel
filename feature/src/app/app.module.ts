import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AuthService} from "./auth.service";
import {CallbackComponent} from "./callback/callback.component";
import {AuthGuard} from "./auth-guard.service";
import {FeatureRequestListComponent} from "./feature-request-list/feature-request-list.component";
import {FeatureRequestComponent} from "./feature-request/feature-request.component";
import {FeatureRequestListResultComponent} from "./feature-request-list-result/feature-request-list-result.component";
import {CreateFeatureRequestComponent} from "./create-feature-request/create-feature-request.component";
import {FeatureRequestService} from "./feature-request.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CallbackComponent,
    FeatureRequestListComponent,
    FeatureRequestComponent,
    FeatureRequestListResultComponent,
    CreateFeatureRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    FeatureRequestService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientComponent} from './client/client.component';
import {HeaderComponent} from './header/header.component';
import {ClientService} from './client.service';
import {ClientListResultComponent} from './client-list-result/client-list-result.component';
import {FooterComponent} from './footer/footer.component';
import { CreateClientComponent } from './create-client/create-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientListComponent,
    ClientComponent,
    HeaderComponent,
    ClientListResultComponent,
    FooterComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

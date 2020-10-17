import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';

import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

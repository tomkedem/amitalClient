import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BASE_PATH } from 'src/api';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // MatSelectModule
    // MatFormFieldModule,
    // MatCheckboxModule,
    // MatInputModule,
    // MatSelectModule,
  ],
  providers: [{
    provide: BASE_PATH,
    useValue: environment.apiURL
  }],
  
    
  bootstrap: [AppComponent]
})
export class AppModule { }

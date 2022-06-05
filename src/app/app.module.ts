import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MaterialModule } from './material/material.module';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';
import { CardsComponent } from './cards/cards.component';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ContactusComponent } from './contactus/contactus.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    EditComponent,
    CardsComponent,
  
    FooterComponent,
    HomeComponent,
    LogoutComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

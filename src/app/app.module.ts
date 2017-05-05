import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TableauComponent } from './tableau/tableau.component';
import { TableauService } from './tableau.service';

// Define the routes
const ROUTES = [
  {
    path: 'token',
    component: TableauComponent
  },
  {
    path: 'tableau',
    component: TableauComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [TableauService], 
  bootstrap: [AppComponent]
})
export class AppModule { }


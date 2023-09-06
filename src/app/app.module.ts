import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { UserService } from './user.service';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component'; // Import HttpClientModule
import { FormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';

import { LoadingInterceptor } from './loading-interceptor'; // Import your interceptor
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule, // Import MatToolbarModule
    MatInputModule, // Import MatInputModule for the search input
    MatCardModule, // Import MatCardModule for the user cards,HttpClientModule
    HttpClientModule,FormsModule,MatPaginatorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor, // Use your interceptor
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }

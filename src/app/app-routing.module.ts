import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'; // Import the UserListComponent
import {UserDetailsComponent} from './user-details/user-details.component';



const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },

  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
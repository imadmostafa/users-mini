import { Component } from '@angular/core';
import { Router } from '@angular/router';

// ...

// constructor(private router: Router) {}

// navigateToUserList() {
//   this.router.navigate(['/user-list']);
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-user-list-app';
}

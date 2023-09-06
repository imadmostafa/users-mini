// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.css']
// })
// export class UserDetailsComponent {

// }

import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  implements OnInit{

// constructor(
//   private route: ActivatedRoute,
//   private userService: UserService
// ) {}

// ngOnInit(): void {
//   this.route.params.subscribe((params) => {
//     const userId = +params['id']; // + is used to convert the parameter to a number
//     this.loadUserData(userId);
//   });
// }

// loadUserData(userId: number) {
//   this.userService.getUserById(userId).subscribe((user) => {
//     // Handle the user data here and display it in the template
//     console.log(user); // For demonstration purposes, log the user data
//   });
// }
user: any; // Define a property to store the user data

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = +params['id'];
      this.loadUserData(userId);
    });
  }

  loadUserData(userId: number) {
    console.log('user',userId)
    this.userService.getUserById(userId).subscribe((user) => {
      console.log('user user ',user)
      this.user = user; // Assign the user data to the 'user' property
    });
  }
}

  
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Create a UserService to fetch user data

import { Router } from '@angular/router';

import '../loading-bar.component.css';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Array to store all users
  displayedUsers: any[] = []; // Array to store displayed users after filtering
  searchTerm: string = ''; // Search term for filtering
  currentPage: number = 1; // Track the current page
  isLoading: boolean = true;

  constructor(private userService: UserService,private router:Router) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.isLoading = true;
    
    this.userService.getUsers(this.currentPage).subscribe((data: any) => {
      // setTimeout(() => {
      //   this.isLoading = false;
      // }, 1000); //for testing only
      console.log("finished")
      this.users = data.data;
      this.displayedUsers = this.users;
      this.isLoading = false;
    });
  }

  applyFilter() {
    this.displayedUsers = this.users.filter((user) =>
      user.id.toString().includes(this.searchTerm)
    );
  }

  goToUserDetails(userId: number) {
    // Navigate to the user details page, you'll need to implement this route.
    this.router.navigate(['/user-details', userId]);
  }

  // onPageChange(page: number) {
  //   // Handle page change events
  //   this.currentPage = page;
  //   this.fetchUsers();
  // }
  onPageChange(event: any) {
    // Use event.pageIndex + 1 to get the selected page number (page index is 0-based)
    const selectedPage = event.pageIndex + 1;
    this.currentPage = selectedPage;
    this.fetchUsers();
  }

}


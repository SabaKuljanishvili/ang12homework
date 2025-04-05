import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res.data;
    });
  }

  viewUserDetails(id: number) {
    this.router.navigate(['/users', id]);

  }

  goToUserDetail(id: number) {
    this.router.navigate(['/users', id]);
  }
  
}

import { Component } from '@angular/core';
import { UserService } from '../../../services/users/user.service';
import { IGetUsers } from '../../../services/models/user';
import { ActivatedRoute } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user: IGetUsers | undefined;
  userId = 0;
  possibleIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  loading: boolean | undefined;

  constructor(private userService: UserService, private Route: ActivatedRoute) {
    this.Route.params.subscribe((params) => {
      if (params['id']) {
        this.userId = parseInt(params['id']);
      }
    });
  }

  ngOnInit() {
    this.conditionalGetSindleUser();
  }

  conditionalGetSindleUser() {
    if (this.possibleIds.includes(this.userId)) {
      this.loading = true;
      this.userService.getUserById(this.userId).subscribe({
        next: (user: IGetUsers) => {
          this.loading = false;
          this.user = user;
        },
      });
    } else {
      this.user = this.userService.getUserFromLocalById(this.userId);
      console.log(this.possibleIds.includes(this.userId));
    }
  }
}
